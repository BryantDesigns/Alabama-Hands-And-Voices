import type { ComponentSchema } from '@keystatic/core'
import type {
    EntryWithResolvedLinkedFiles,
    Reader,
} from '@keystatic/core/reader'
import type keystaticConfig from '../../../keystatic.config'
import { reader } from './reader'

// The singleton module: the one place singletons are read — server-only,
// because it binds the production reader.
//
// Routes and components use `getSingleton(name)` and `SingletonContent<name>`
// (components import the type with `import type`). `createSingletons(reader)`
// is the seam tests use to read fixture content; routes never see a reader.

type KeystaticConfig = typeof keystaticConfig

type SingletonName = keyof KeystaticConfig['singletons']

export type SingletonContent<Name extends SingletonName> =
    EntryWithResolvedLinkedFiles<KeystaticConfig['singletons'][Name]>

type ContentReader = Reader<
    KeystaticConfig['collections'],
    KeystaticConfig['singletons']
>

type FieldValues = Record<string, unknown>

type SingletonConfig = {
    label: string
    schema: Record<string, ComponentSchema>
}

// Holds a singleton's content to more than Keystatic's validation: returns
// the content cleaned up, or throws naming the field by its editor path.
type SingletonCheck = (
    content: FieldValues,
    singletonConfig: SingletonConfig
) => FieldValues

// Site Settings and Navigation fill the header, footer and contact details on
// every page, so their text must not be whitespace-only and comes back
// trimmed. The Site Settings Facebook URL must also be absolute.
const singletonChecks: Partial<Record<SingletonName, SingletonCheck>> = {
    siteSettings: (content, singletonConfig) => {
        const checkedContent = requireTrimmedText(
            content,
            singletonConfig.schema,
            singletonConfig.label
        )

        requireAbsoluteUrl(
            checkedContent.facebookUrl as string,
            fieldEditorPath(
                singletonConfig.label,
                singletonConfig.schema.facebookUrl,
                'facebookUrl'
            )
        )

        return checkedContent
    },
    navigation: (content, singletonConfig) =>
        requireTrimmedText(
            content,
            singletonConfig.schema,
            singletonConfig.label
        ),
}

export function createSingletons(contentReader: ContentReader) {
    // Returns the named singleton with every rich-text field resolved to a
    // document, including rich text nested in lists. Throws if the singleton
    // is missing or fails Keystatic's validation.
    async function getSingleton<Name extends SingletonName>(
        singletonName: Name
    ): Promise<SingletonContent<Name>> {
        const content = (await contentReader.singletons[
            singletonName
        ].readOrThrow({ resolveLinkedFiles: true })) as FieldValues
        const checkSingleton = singletonChecks[singletonName]

        if (!checkSingleton) {
            return content as SingletonContent<Name>
        }

        return checkSingleton(
            content,
            contentReader.config.singletons[singletonName]
        ) as SingletonContent<Name>
    }

    return { getSingleton }
}

// Trims every text value in the entry and throws on one that is only
// whitespace. Empty text is left to Keystatic: it rejects a required field
// that is empty, and an optional field left empty is allowed. `editorPath`
// names each field the way editors see it, from the schema's labels, e.g.
// "Site Settings > Site Name".
function requireTrimmedText(
    values: FieldValues,
    schema: Record<string, ComponentSchema>,
    editorPath: string
): FieldValues {
    return Object.fromEntries(
        Object.entries(schema).map(([fieldName, field]) => {
            const value = values[fieldName]
            const fieldPath = fieldEditorPath(editorPath, field, fieldName)

            if (field.kind === 'object') {
                return [
                    fieldName,
                    requireTrimmedText(
                        value as FieldValues,
                        field.fields,
                        fieldPath
                    ),
                ]
            }

            if (typeof value === 'string') {
                return [fieldName, requireText(value, fieldPath)]
            }

            return [fieldName, value]
        })
    )
}

// Keystatic's own required-field check lets whitespace-only text through.
function requireText(value: string, fieldPath: string) {
    const trimmedValue = value.trim()
    const isWhitespaceOnly = value !== '' && trimmedValue === ''

    if (isWhitespaceOnly) {
        throw new Error(`[Keystatic] Required field "${fieldPath}" is empty.`)
    }

    return trimmedValue
}

// Keystatic's URL field accepts relative URLs; this one must be absolute.
function requireAbsoluteUrl(value: string, fieldPath: string) {
    try {
        new URL(value)
    } catch {
        throw new Error(`[Keystatic] ${fieldPath} must be a valid URL.`)
    }
}

// Names a field the way editors see it: its parent's editor path, then the
// field's schema label, e.g. "Site Settings > Facebook URL".
function fieldEditorPath(
    parentEditorPath: string,
    field: ComponentSchema,
    fieldName: string
) {
    const fieldLabel = ('label' in field && field.label) || fieldName

    return `${parentEditorPath} > ${fieldLabel}`
}

export const { getSingleton } = createSingletons(reader)
