import type { VideoContent } from '@/types/cms'

export type VideoPlacement = 'resources' | 'dhh-committee'

export interface VideoRecord extends VideoContent {
    placement: VideoPlacement
    sortOrder: number
    active: boolean
}

export function selectActiveVideos(
    videos: VideoRecord[],
    placement: VideoPlacement
): VideoContent[] {
    return videos
        .filter((video) => video.active && video.placement === placement)
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((video) => ({
            id: video.id,
            title: video.title,
            youtubeId: video.youtubeId,
            thumbnailFrame: video.thumbnailFrame,
        }))
}
