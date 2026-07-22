const VIEWABLE = /\.pdf(?=$|[?#])/i
const DOWNLOAD_ONLY = /\.docx?(?=$|[?#])/i

interface DocumentLinkProps {
    download?: true
    target?: '_blank'
    rel?: string
}

export function isViewableDocument(url: string): boolean {
    return VIEWABLE.test(url)
}
export function isDownloadOnlyDocument(url: string): boolean {
    return DOWNLOAD_ONLY.test(url)
}

export function documentLinkProps(
    url: string,
    opts?: { externalNewTab?: boolean }
): DocumentLinkProps {
    if (isViewableDocument(url)) {
        return { target: '_blank', rel: 'noopener noreferrer' }
    }
    if (isDownloadOnlyDocument(url)) {
        return { download: true }
    }
    if (opts?.externalNewTab && url.startsWith('http')) {
        return { target: '_blank', rel: 'noopener noreferrer' }
    }
    return {}
}
