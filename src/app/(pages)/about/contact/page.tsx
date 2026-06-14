import Image from 'next/image'
import { getContactPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/about/contact')

export default async function ContactPage() {
  const data = await getContactPageContent()

  const heading = data?.heading ?? 'Contact Us'
  const body = data?.body ?? ''
  const email = data?.email ?? 'alabamahinfo@gmail.com'
  const phone = data?.phone ?? '205-677-3136'
  const image = data?.image ?? '/images/contactUs.jpg'

  return (
      <main>
          <section className="relative bg-hvblue py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
                      {/* Left Image */}
                      <div className="relative w-full overflow-hidden rounded-lg">
                          <Image
                              src={image}
                              alt="Contact Us"
                              width={600}
                              height={400}
                              className="aspect-16/9 w-full object-cover shadow-lg"
                          />
                      </div>

                      {/* Right Text */}
                      <div>
                          <h1 className="text-4xl font-semibold uppercase tracking-tight text-hvorange sm:text-5xl">
                              {heading}
                          </h1>
                          <p className="mt-6 text-lg leading-relaxed text-white">
                              {body}
                          </p>
                          <p className="mt-4 text-lg leading-relaxed text-white">
                              If you have questions or comments for our team,
                              please{' '}
                              <strong>
                                  <a
                                      className="text-hvorange-400 underline"
                                      href={`mailto:${email}`}
                                  >
                                      email us
                                  </a>
                              </strong>{' '}
                              or call{' '}
                              <strong>
                                  <a
                                      className="text-hvorange-400 underline"
                                      href={`tel:${phone}`}
                                  >
                                      {phone}
                                  </a>
                              </strong>
                              .
                          </p>
                          <p className="mt-4 text-lg leading-relaxed text-white">
                              Visit our{' '}
                              <strong>
                                  <a
                                      className="text-hvorange-400 underline"
                                      href="/programs/gbys"
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
