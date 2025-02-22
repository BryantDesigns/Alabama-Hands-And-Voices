import Image from 'next/image'
export default function ContactPage() {
  return (
      <main>
          <section className="relative bg-hvblue py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
                      {/* Left Image */}
                      <div className="relative w-full overflow-hidden rounded-lg">
                          <Image
                              src="/images/contactUs.jpg"
                              alt="Contact Us"
                              width={600}
                              height={400}
                              className="aspect-[16/9] w-full object-cover shadow-lg"
                          />
                      </div>

                      {/* Right Text */}
                      <div>
                          <h2 className="text-4xl font-semibold uppercase tracking-tight text-hvorange sm:text-5xl">
                              Contact Us
                          </h2>
                          <p className="mt-6 text-lg leading-relaxed text-white">
                              Thank you for visiting our website where it is our
                              mission to support families with children who are
                              deaf or hard of hearing without bias toward
                              communication mode. We believe what works for your
                              child is what makes the choice right.
                          </p>
                          <p className="mt-4 text-lg leading-relaxed text-white">
                              If you have questions or comments for our team,
                              please{' '}
                              <strong>
                                  <a
                                      className="text-hvorange underline"
                                      href="mailto:alabamahinfo@gmail.com"
                                  >
                                      email us
                                  </a>
                              </strong>{' '}
                              or call{' '}
                              <strong>
                                  <a
                                      className="text-hvorange underline"
                                      href="tel:205-677-3136"
                                  >
                                      205-677-3136
                                  </a>
                              </strong>
                              .
                          </p>
                          <p className="mt-4 text-lg leading-relaxed text-white">
                              Visit our{' '}
                              <strong>
                                  <a
                                      className="text-hvorange underline"
                                      href="/gbys"
                                  >
                                      Guide By Your Side page
                                  </a>
                              </strong>{' '}
                              for more information or to refer a family or
                              yourself.
                          </p>
                          <p className="mt-4 text-lg leading-relaxed text-white">
                              If you have any questions or suggestions regarding
                              the website, please feel free to email us. We are
                              dedicated to making this site work for you.
                          </p>
                          <p className="mt-4 text-lg font-semibold text-white">
                              We look forward to connecting with you.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  )
}
