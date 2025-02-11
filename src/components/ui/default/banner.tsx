'use client'

import clsx from 'clsx'
import type { ReactNode } from 'react'
import Image from 'next/image'

type BannerProps = {
    backgroundImage?: string
    overlayGradients?: GradientProps[]
    className?: string
    children: ReactNode
}

type GradientProps = {
    clipPath: string
    gradientClass: string
    positionClass: string
}

export function Banner({
    backgroundImage,
    overlayGradients = [],
    className,
    children,
}: BannerProps) {
    return (
        <div
            className={clsx(
                'relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8',
                className
            )}
        >
            {backgroundImage && <BannerBackgroundImage src={backgroundImage} />}
            {overlayGradients.map((gradient, index) => (
                <BannerGradient key={index} {...gradient} />
            ))}
            {children}
        </div>
    )
}

function BannerBackgroundImage({ src }: { src: string }) {
    return (
        <Image
            alt=""
            src={src}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
    )
}

function BannerGradient({
    clipPath,
    gradientClass,
    positionClass,
}: GradientProps) {
    return (
        <div
            aria-hidden="true"
            className={clsx('absolute -z-10 blur-3xl', positionClass)}
        >
            <div
                style={{ clipPath }}
                className={clsx('aspect-[1097/845]', gradientClass)}
            />
        </div>
    )
}

export function BannerSection({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) {
    return (
        <div className={clsx('mx-auto max-w-7xl', className)}>{children}</div>
    )
}

export function BannerContent({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) {
    return (
        <div className={clsx('mx-auto max-w-2xl', className)}>{children}</div>
    )
}

export function BannerEyebrow({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) {
    return (
        <p className={clsx('text-base/7 font-semibold', className)}>
            {children}
        </p>
    )
}

export function BannerTitle({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) {
    return (
        <h2
            className={clsx(
                'mt-2 font-semibold tracking-tight',
                className
            )}
        >
            {children}
        </h2>
    )
}

export function BannerDescription({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) {
    return (
        <p
            className={clsx(
                'mt-8 text-lg font-medium text-gray-400 sm:text-xl/8',
                className
            )}
        >
            {children}
        </p>
    )
}
