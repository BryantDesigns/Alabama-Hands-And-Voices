import Image from 'next/image'
import GBYSForm from '@/components/pages/gbyspage/GBYSForm'

const services = [
    'Connection to local, state, and national resources for hearing loss',
    'Regional social events, family connections, workshops',
    'Support for Spanish-speaking families & families with unique hearing needs',
    'Advocacy through Early Intervention, school transitions, IEP/IFSP development',
    'One-on-one parent support tailored to your family’s journey',
]
export default function GBYSPage() {
  return (
      <main>
          <div className="bg-gray-200 pb-5">
              <section className="bg-gray-100 text-center text-gray-700">
                  <div className="container mx-auto px-4">
                      <div className="flex justify-center pt-5">
                          <div className="mb-[-1.25rem] mt-5 rounded-lg bg-white p-5 shadow-lg">
                              <Image
                                  src="/images/gbys-logo.png"
                                  alt="GBYS Logo"
                                  width={300}
                                  height={100}
                                  className="mx-auto"
                                  priority
                              />
                          </div>
                      </div>
                  </div>
              </section>
              <div className="w-full"></div>
          </div>
          <section className="bg-hvorange py-12 text-white">
              <div className="container mx-auto px-6 text-center">
                  <h2 className="text-3xl font-bold">
                      Alabama Hands & Voices Guide By Your Side
                  </h2>
                  <p className="mx-auto mt-4 max-w-3xl text-lg">
                      At Alabama Hands & Voices, we understand the power of
                      parents sharing and connecting. The Guide By Your Side
                      program supports families whose children have been
                      diagnosed with hearing loss by offering one-on-one support
                      with a trained Parent Guide.
                  </p>
              </div>
          </section>
          <section className="bg-hvblue py-12 text-white">
              <div className="container mx-auto max-w-3xl px-6 text-left">
                  <h3 className="text-2xl font-bold text-gray-200">
                      What the GBYS Program Can Do for You
                  </h3>
                  <p className="mx-auto mt-4 max-w-3xl text-lg">
                      Parent Guides are parents of children who are deaf or hard
                      of hearing, trained to provide support and advocacy to
                      families. We bring our experiences in raising a
                      deaf/hard-of-hearing child and help you navigate this
                      journey.
                  </p>
              </div>
          </section>
          <section className="bg-gray-100 py-12">
              <div className="container mx-auto px-6">
                  <div className="flex items-center justify-center">
                      <hr className="flex-grow border-gray-400" />
                      <h3 className="mx-4 text-xl text-hvorange font-semibold uppercase">
                          Services Available
                      </h3>
                      <hr className="flex-grow border-gray-400" />
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {services.map((service, index) => (
                          <div
                              key={index}
                              className="rounded-lg bg-white p-6 shadow-md"
                          >
                              <p className="text-lg">{service}</p>
                          </div>
                      ))}
                  </div>

                  <p className="mt-6 text-center text-lg">
                      Thanks to generous donors, this program is free of charge.
                      You can enroll at any stage of your child’s journey.
                  </p>
              </div>
      </section>
      <GBYSForm />
      </main>
  )
}
