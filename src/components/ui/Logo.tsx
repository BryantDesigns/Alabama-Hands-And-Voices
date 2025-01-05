import Image from 'next/image'

interface LogoProps {
    width?: number
    height?: number
    className?: string
    alt?: string
}

export default function Logo({
    width = 40,
    height = 100,
    className = '',
    alt = 'HV Logo',
}: LogoProps) {
    return (
        <Image
            src="/images/01_hvlogo.png"
            alt={alt}
            width={width}
            height={height}
            className={className}
            sizes="(max-width: 768px) 40px, (max-width: 1200px) 60px, 100px"
        />
    )
}
