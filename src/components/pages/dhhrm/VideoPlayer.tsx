'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { VideoContent } from '@/types/cms'

interface VideoPlayerProps {
    videos: VideoContent[]
}

const VideoPlayer = ({ videos }: VideoPlayerProps) => {
    const [currentVideoId, setCurrentVideoId] = useState(
        videos[0]?.youtubeId ?? ''
    )

    if (videos.length === 0) {
        return null
    }

    const currentVideo =
        videos.find((video) => video.youtubeId === currentVideoId) ?? videos[0]

    return (
        <div className="mx-auto max-w-6xl">
            {/* Main Video Player */}
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                    src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?rel=0&showinfo=0&autohide=1`}
                    className="h-full w-full"
                    frameBorder="0"
                    allowFullScreen
                    title={currentVideo.title}
                />
            </div>

            {/* Video Playlist */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {videos.slice(1).map((video) => (
                    <button
                        key={video.id}
                        onClick={() => setCurrentVideoId(video.youtubeId)}
                        className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hvorange-400"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src={`https://img.youtube.com/vi/${video.youtubeId}/${video.thumbnailFrame}.jpg`}
                                alt={video.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                                    <svg
                                        className="ml-1 h-6 w-6 text-hvblue-600"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
                                {video.title}
                            </h3>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default VideoPlayer
