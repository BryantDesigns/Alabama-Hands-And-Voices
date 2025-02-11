import { ReactNode } from 'react'
import clsx from 'clsx'

// Define accepted props
interface HeadingProps {
    level?: 1 | 2 | 3 | 4
    children: ReactNode
    align?: 'left' | 'center' | 'right'
    color?: 'hvblue' | 'hvorange' | 'gray' | 'black' | 'white'
    className?: string
}

const Heading = ({
    level = 2,
    children,
    align = 'left',
    color = 'gray',
    className = '',
}: HeadingProps) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements // Dynamic heading level

    return (
        <Tag
            className={clsx(
                'font-semibold tracking-tight',
                {
                    'text-5xl sm:text-6xl': level === 1,
                    'text-4xl sm:text-5xl': level === 2,
                    'text-3xl sm:text-4xl': level === 3,
                    'text-2xl sm:text-3xl': level === 4,
                    'text-left': align === 'left',
                    'text-center': align === 'center',
                    'text-right': align === 'right',
                    'text-hvblue-500': color === 'hvblue',
                    'text-hvorange-500': color === 'hvorange',
                    'text-gray-900': color === 'gray',
                    'text-black': color === 'black',
                    'text-white': color === 'white',
                },
                className
            )}
        >
            {children}
        </Tag>
    )
}

export default Heading
