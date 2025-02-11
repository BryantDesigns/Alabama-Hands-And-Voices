import React from 'react'
import classNames from 'classnames'

// Props Interface
interface ContainerProps {
    children: React.ReactNode
    bgColor?: string // Tailwind background color class
    bgImage?: string // Background image URL
}

// Utility function to generate background styles
const getBackgroundStyles = (bgColor?: string, bgImage?: string) => {
    return classNames(
        'px-6 lg:px-8 py-8', // Padding
        bgColor, // Apply background color if provided
        bgImage ? `bg-cover bg-center bg-no-repeat` : '' // Apply background image styles
    )
}

// Base Container (Standard)
export const BaseContainer: React.FC<ContainerProps> = ({
    children,
    bgColor,
    bgImage,
}) => {
    return (
        <div
            className={classNames(
                'mx-auto max-w-7xl',
                getBackgroundStyles(bgColor, bgImage)
            )}
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        >
            {children}
        </div>
    )
}

// Full-Width Container
export const FullWidthContainer: React.FC<ContainerProps> = ({
    children,
    bgColor,
    bgImage,
}) => {
    return (
        <div
            className={classNames(
                'w-full',
                getBackgroundStyles(bgColor, bgImage)
            )}
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        >
            {children}
        </div>
    )
}

// Two-Column Container (50% / 50%)
export const TwoColumnContainer: React.FC<
    ContainerProps & { left: React.ReactNode; right: React.ReactNode }
> = ({ left, right, bgColor, bgImage }) => {
    return (
        <div
            className={classNames(
                'mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row',
                getBackgroundStyles(bgColor, bgImage)
            )}
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        >
            <div className="w-full lg:w-1/2">{left}</div>
            <div className="w-full lg:w-1/2">{right}</div>
        </div>
    )
}

// Three-Column Container (33% / 33% / 33%)
export const ThreeColumnContainer: React.FC<
    ContainerProps & {
        col1: React.ReactNode
        col2: React.ReactNode
        col3: React.ReactNode
    }
> = ({ col1, col2, col3, bgColor, bgImage }) => {
    return (
        <div
            className={classNames(
                'mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row',
                getBackgroundStyles(bgColor, bgImage)
            )}
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        >
            <div className="w-full lg:w-1/3">{col1}</div>
            <div className="w-full lg:w-1/3">{col2}</div>
            <div className="w-full lg:w-1/3">{col3}</div>
        </div>
    )
}
