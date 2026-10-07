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

export type SingletonName = keyof KeystaticConfig['singletons']

export type SingletonContent<Name extends SingletonName> =
    EntryWithResolvedLinkedFiles<KeystaticConfig['singletons'][Name]>

type ContentReader = Reader<
    KeystaticConfig['collections'],
    KeystaticConfig['singletons']
>

type FieldValues = Record<string, unknown>

// Site Settings and Navigation fill the header, footer and contact details on
// every page, so their text is held to more than Keystatic's validation: it
// must not be whitespace-only, and it comes back trimmed.
const textCheckedSingletons: ReadonlySet<SingletonName> = new Set([
    'siteSettings',
    'navigation',
])

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

        if (!textCheckedSingletons.has(singletonName)) {
            return content as SingletonContent<Name>
        }

        const singletonConfig = contentReader.config.singletons[singletonName]
        const checkedContent = requireTrimmedText(
            content,
            singletonConfig.schema,
            singletonConfig.label
        )

        if (singletonName === 'siteSettings') {
            requireAbsoluteUrl(
                checkedContent.facebookUrl as string,
                'Site Settings > Facebook URL'
            )
        }

        return checkedContent as SingletonContent<Name>
    }

    return { getSingleton }
}

// Trims every text value in the entry and throws on one that is only
// whitespace. `editorPath` names each field the way editors see it, from the
// schema's labels, e.g. "Site Settings > Site Name".
function requireTrimmedText(
    values: FieldValues,
    schema: Record<string, ComponentSchema>,
    editorPath: string
): FieldValues {
    return Object.fromEntries(
        Object.entries(schema).map(([fieldName, field]) => {
            const value = values[fieldName]
            const fieldPath = `${editorPath} > ${fieldLabel(field, fieldName)}`

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

    if (!trimmedValue) {
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

function fieldLabel(field: ComponentSchema, fieldName: string) {
    return ('label' in field && field.label) || fieldName
}

export const { getSingleton } = createSingletons(reader)
