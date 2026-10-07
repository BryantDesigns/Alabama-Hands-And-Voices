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

export function createSingletons(contentReader: ContentReader) {
    // Returns the named singleton with every rich-text field resolved to a
    // document, including rich text nested in lists. Throws if the singleton
    // is missing or fails Keystatic's validation.
    async function getSingleton<Name extends SingletonName>(
        singletonName: Name
    ): Promise<SingletonContent<Name>> {
        return contentReader.singletons[singletonName].readOrThrow({
            resolveLinkedFiles: true,
        }) as Promise<SingletonContent<Name>>
    }

    return { getSingleton }
}

export const { getSingleton } = createSingletons(reader)
