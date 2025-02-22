import Image from 'next/image'

export default function InMemoriam() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left Side - Text Content */}
                    <div className="flex flex-col justify-center">
                        <h6 className="text-lg font-semibold uppercase text-hvblue">
                            Kristine Lemoyne Mathis Henderson
                        </h6>
                        <h2 className="mt-2 text-4xl font-bold text-gray-800">
                            In Memoriam
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-gray-700">
                            Kristine Lemoyne Mathis Henderson was instrumental
                            in founding Alabama Hands & Voices. She attended one
                            of our earliest get-togethers and became a member of
                            the Board of Directors in 2018. As the child of deaf
                            parents (CODA - Child of Deaf Adult), a nurse, and
                            the mother of a deaf son, she brought so much wisdom
                            to the formation of Alabama Hands & Voices.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-gray-700">
                            Her calm and warm personality drew people to her.
                            She served on the board while fighting cancer. She
                            passed away far too young in March 2020. We miss her
                            very much and dedicate ourselves to serving families
                            of deaf and hard-of-hearing children in her honor.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
                        <Image
                            src="/images/Kristine.jpg"
                            alt="Photo of Kristine Lemoyne Mathis Henderson"
                            width={600}
                            height={400}
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
