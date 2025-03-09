import Image from 'next/image'



const HeroSection: React.FC = () => (
    <div className="header-banner-bg relative flex min-h-[300px] items-center justify-center">
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white opacity-40"></div>

        {/* Content Container */}
        <div className="relative w-full bg-hvorange bg-opacity-50 py-3">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="flex items-center justify-center text-center md:w-3/4 md:justify-start md:text-left">
                        <h1 className="font-kaushan text-2xl text-black md:text-4xl">
                            &quot;What works for your child is what makes the choice
                            right.&quot; ™
                        </h1>
                    </div>
                    {/* Logo Image */}
                    <div className="hidden justify-center md:flex md:w-1/4">
                        <div className="relative h-[120px] w-[120px] md:h-[150px] md:w-[150px]">
                            <Image
                                src="/images/hvlogo.svg"
                                alt="Alabama Hands & Voices Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default HeroSection
