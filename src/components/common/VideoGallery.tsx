'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { VideoContent } from '@/types/cms'

interface VideoGalleryProps {
    videos: VideoContent[]
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
    const [selectedVideoId, setSelectedVideoId] = useState(
        videos[0]?.youtubeId ?? ''
    )

    if (videos.length === 0) {
        return null
    }

    const selectedVideo =
        videos.find((video) => video.youtubeId === selectedVideoId) ?? videos[0]

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-4xl font-semibold tracking-tight text-hvblue sm:text-5xl">
                    Hands & Voices Video Library
                </h2>
                <p className="mt-4 text-center text-lg text-gray-600">
                    Explore our video library featuring inspiring stories and
                    valuable resources.
                </p>

                {/* Video Player */}
                <div className="mt-10 flex justify-center">
                    <div className="w-full max-w-3xl">
                        <div className="aspect-video rounded-lg shadow-lg">
                            <iframe
                                id="vid_frame"
                                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?rel=0&showinfo=0&autohide=1`}
                                frameBorder="0"
                                allowFullScreen
                                title={selectedVideo.title}
                                className="h-full w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Video Thumbnails */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video) => (
                        <button
                            key={video.id}
                            onClick={() => setSelectedVideoId(video.youtubeId)}
                            className="group flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow-md transition hover:bg-gray-200 focus:outline-none"
                        >
                            <Image
                                src={`https://img.youtube.com/vi/${video.youtubeId}/${video.thumbnailFrame}.jpg`}
                                alt={video.title}
                                width={480}
                                height={270}
                                className="aspect-video w-full rounded-md"
                            />
                            <p className="mt-2 text-center text-lg font-medium text-gray-900 group-hover:text-hvorange">
                                {video.title}
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
