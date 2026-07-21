import Image from 'next/image'

export default function InMemoriam() {
    return (
        <section className="bg-slate-100 py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-slate-600">
                            In Memoriam
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Kristine Lemoyne Mathis Henderson
                        </h2>
                        <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
                            Kristine Lemoyne Mathis Henderson was instrumental
                            in founding Alabama Hands & Voices. She attended one
                            of our earliest get-togethers and became a member of
                            the Board of Directors in 2018. As the child of deaf
                            parents (CODA - Child of Deaf Adult), a nurse, and
                            the mother of a deaf son, she brought so much wisdom
                            to the formation of Alabama Hands & Voices.
                        </p>
                        <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
                            Her calm and warm personality drew people to her.
                            She served on the board while fighting cancer. She
                            passed away far too young in March 2020. We miss her
                            very much and dedicate ourselves to serving families
                            of deaf and hard-of-hearing children in her honor.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
                        <Image
                            src="/images/kristine.jpg"
                            alt="Photo of Kristine Lemoyne Mathis Henderson"
                            width={600}
                            height={400}
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="aspect-3/2 w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
