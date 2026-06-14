import { reader } from './reader'
import type { VideoContent } from '@/types/cms'
import {
    selectActiveVideos,
    type VideoPlacement,
    type VideoRecord,
} from '@/lib/videos'

// Typed collection helpers — server-only.
// Import these functions in server components and route files only.

export async function getBoardMembers() {
    return reader.collections.boardMembers.all()
}

export async function getStaffMembers() {
    return reader.collections.staffMembers.all()
}

export async function getVideos() {
    return reader.collections.videos.all()
}

export async function getVideosByPlacement(
    placement: VideoPlacement
): Promise<VideoContent[]> {
    const videos = await getVideos()
    const records: VideoRecord[] = videos.map(({ slug, entry }) => ({
        id: slug,
        title: entry.title,
        youtubeId: entry.youtubeId,
        placement: entry.placement,
        thumbnailFrame: entry.thumbnailFrame,
        sortOrder: entry.sortOrder,
        active: entry.active,
    }))

    return selectActiveVideos(records, placement)
}
