import type { DocumentElement } from '@keystatic/core'
import { DocumentRenderer } from '@keystatic/core/renderer'
import { documentLinkProps } from '@/utils/documentLinks'

interface RichTextProps {
    document: DocumentElement[]
    className?: string
}

export default function RichText({
    document,
    className = '',
}: RichTextProps) {
    return (
        <div
            className={`space-y-4 [&_a]:font-bold [&_a]:underline ${className}`}
        >
            <DocumentRenderer
                document={document}
                renderers={{
                    inline: {
                        link: ({ href, children }) => (
                            <a
                                href={href}
                                {...documentLinkProps(href, {
                                    externalNewTab: true,
                                })}
                            >
                                {children}
                            </a>
                        ),
                    },
                    block: {
                        list: ({ type, children }) => {
                            if (type === 'ordered') {
                                return (
                                    <ol className="list-decimal space-y-1 pl-5">
                                        {children.map((child, index) => (
                                            <li key={index}>{child}</li>
                                        ))}
                                    </ol>
                                )
                            }

                            return (
                                <ul className="list-disc space-y-1 pl-5">
                                    {children.map((child, index) => (
                                        <li key={index}>{child}</li>
                                    ))}
                                </ul>
                            )
                        },
                    },
                }}
            />
        </div>
    )
}
