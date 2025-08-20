'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Video {
    id: string
    title: string
    thumbnail: string
}

const videos: Video[] = [
    {
        id: 'PHOm_bHbAhQ',
        title: 'Default Video',
        thumbnail: 'https://img.youtube.com/vi/PHOm_bHbAhQ/0.jpg'
    },
    {
        id: 'KCM7farAYc4',
        title: 'Ahav Makenzie',
        thumbnail: 'https://img.youtube.com/vi/KCM7farAYc4/0.jpg'
    },
    {
        id: 'rSMnEZl-SDA',
        title: 'DHH Role Model Interview - Ryan Hickman 2020',
        thumbnail: 'https://img.youtube.com/vi/rSMnEZl-SDA/1.jpg'
    },
    {
        id: 'pws5WCqUYPs',
        title: 'Beth Overland video',
        thumbnail: 'https://img.youtube.com/vi/pws5WCqUYPs/0.jpg'
    },
    {
        id: '8Qr9RHOidV4',
        title: 'The Mission of Hands & Voices (American Sign Language)',
        thumbnail: 'https://img.youtube.com/vi/8Qr9RHOidV4/0.jpg'
    },
    {
        id: 'HVU2MEcJzxI',
        title: 'Deaf and Hard of Hearing Hidden Figures',
        thumbnail: 'https://img.youtube.com/vi/HVU2MEcJzxI/0.jpg'
    }
]

const VideoPlayer = () => {
    const [currentVideo, setCurrentVideo] = useState(videos[0].id)

    return (
        <div className="mx-auto max-w-6xl">
            {/* Main Video Player */}
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                    src={`https://www.youtube.com/embed/${currentVideo}?rel=0&showinfo=0&autohide=1`}
                    className="h-full w-full"
                    frameBorder="0"
                    allowFullScreen
                    title="Video Player"
                />
            </div>

            {/* Video Playlist */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {videos.slice(1).map((video) => (
                    <button
                        key={video.id}
                        onClick={() => setCurrentVideo(video.id)}
                        className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
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
                            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
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
