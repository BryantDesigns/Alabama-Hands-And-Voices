'use client'
import Image from 'next/image'
import VideoGallery from '@/components/common/VideoGallery'
import React from 'react'
export default function ResourcesPage() {
    const categories = [
        {
            title: 'Confirmed Hearing Loss',
            resources: [
                { name: 'Guide By Your Side', url: '/gbys' },
                { name: 'Educational Advocacy (ASTra)', url: '/astra' },
            ],
        },
        {
            title: 'Children Ages 0-3',
            resources: [
                {
                    name: 'Testing Baby’s Hearing',
                    url: 'assets/02_Parent%20Road%20Map.pdf',
                },
                {
                    name: 'Alabama Newborn Screening Program',
                    url: 'https://www.alabamapublichealth.gov/newbornscreening/newborn-hearing-screening.html',
                },
                {
                    name: 'Parent’s Guide to D/HH Early Intervention (English)',
                    url: 'https://www.handsandvoices.org/resources/pubs/Final_8-30-2017.pdf',
                },
                {
                    name: 'Parent’s Guide to D/HH Early Intervention (Spanish)',
                    url: 'https://www.handsandvoices.org/resources/pubs/jci-parentsguide-spanish.pdf',
                },
                {
                    name: 'Alabama Early Intervention’s System',
                    url: 'https://rehab.alabama.gov/nevertooearlyal/',
                },
                {
                    name: 'Alabama Hearing Loss Options',
                    url: 'https://www.alhearinglossoptions.org/',
                },
                {
                    name: 'List of Resources and Providers',
                    url: 'assets/0-3%20Children%20Resources.pdf',
                },
            ],
        },
        {
            title: 'Children 3+',
            resources: [
                {
                    name: 'Alabama Parent Education Center',
                    url: 'http://alabamaparentcenter.com/web/',
                },
                {
                    name: 'Alabama Department of Special Education Services',
                    url: 'https://www.alabamaachieves.org/special-education/',
                },
                {
                    name: 'Alabama Vocational Rehabilitation Services',
                    url: 'https://www.rehab.alabama.gov/services/vr/vr',
                },
                {
                    name: 'Deaf Education Guidelines',
                    url: 'https://deafedguidelines.org/',
                },
                {
                    name: 'Alabama Hands & Voices Communication Plan',
                    url: 'assets/ALHV V17 4.13.24 Communication Plan - fillable form.docx',
                },
                {
                    name: 'Alabama Hands & Voices Spanish Communication Plan',
                    url: 'assets/Communication%20Plan%20-%20Spanish%20Version%202024.docx',
                },
                {
                    name: 'List of Resources and Providers',
                    url: 'assets/11_List%20of%20Resources%20and%20Providers%20Age%203+.pdf',
                },
                {
                    name: 'Cheryl Johnson discussion of Educational Service Guidelines',
                    url: 'https://www.youtube.com/watch?v=toZKXzZ20UA',
                },
            ],
        },
    ]

    return (
        <>
            <section className="bg-hvblue py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Alabama Hands & Voices Resources
                    </h2>
                    <p className="mt-6 text-center text-lg leading-relaxed text-gray-200">
                        Below is a list of valuable resources and organizations
                        providing support for families with children who are
                        deaf or hard of hearing.
                    </p>

                    {/* Table Section */}
                    <div className="mt-12 flex flex-col gap-12 lg:flex-row">
                        <div className="w-full overflow-x-auto lg:w-3/4">
                            <div className="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                colSpan={2}
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                            >
                                                Resource
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {categories.map((category) => (
                                            <React.Fragment
                                                key={category.title}
                                            >
                                                {/* Section Header */}
                                                <tr className="bg-gray-100">
                                                    <td
                                                        colSpan={2}
                                                        className="px-4 py-4 text-left text-lg font-semibold text-gray-900"
                                                    >
                                                        {category.title}
                                                    </td>
                                                </tr>

                                                {/* Responsive Two-Column Layout */}
                                                {category.resources.length ===
                                                1 ? (
                                                    <tr
                                                        key={
                                                            category
                                                                .resources[0]
                                                                .name
                                                        }
                                                    >
                                                        <td
                                                            colSpan={2}
                                                            className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-900"
                                                        >
                                                            <a
                                                                href={
                                                                    category
                                                                        .resources[0]
                                                                        .url
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-hvorange hover:text-hvorange-700"
                                                            >
                                                                {
                                                                    category
                                                                        .resources[0]
                                                                        .name
                                                                }
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    category.resources
                                                        .reduce(
                                                            (
                                                                rows,
                                                                resource,
                                                                index
                                                            ) => {
                                                                if (
                                                                    index %
                                                                        2 ===
                                                                    0
                                                                ) {
                                                                    rows.push([
                                                                        resource,
                                                                    ]) // Start new row
                                                                } else {
                                                                    rows[
                                                                        rows.length -
                                                                            1
                                                                    ].push(
                                                                        resource
                                                                    ) // Add to existing row
                                                                }
                                                                return rows
                                                            },
                                                            []
                                                        )
                                                        .map(
                                                            (row, rowIndex) => (
                                                                <tr
                                                                    key={
                                                                        rowIndex
                                                                    }
                                                                    className="sm:grid sm:grid-cols-1 md:grid-cols-2"
                                                                >
                                                                    {row.map(
                                                                        (
                                                                            resource
                                                                        ) => (
                                                                            <td
                                                                                key={
                                                                                    resource.name
                                                                                }
                                                                                className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-900"
                                                                            >
                                                                                <a
                                                                                    href={
                                                                                        resource.url
                                                                                    }
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    className="text-hvorange hover:text-hvorange-700"
                                                                                >
                                                                                    {
                                                                                        resource.name
                                                                                    }
                                                                                </a>
                                                                            </td>
                                                                        )
                                                                    )}
                                                                    {row.length ===
                                                                        1 && (
                                                                        <td className="hidden px-4 py-4 md:block"></td>
                                                                    )}{' '}
                                                                    {/* Empty column if odd row */}
                                                                </tr>
                                                            )
                                                        )
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* EHDI-PALS Section */}
                        <div className="flex w-full flex-col items-center text-center lg:w-1/4">
                            <div className="rounded-lg bg-white p-6 shadow-md">
                                <Image
                                    src="/images/ehdiLogoSquare.png"
                                    alt="EHDI Pals"
                                    width={200}
                                    height={200}
                                    className="mx-auto rounded-md"
                                />
                                <p className="text-md mt-4 text-gray-700">
                                    The EHDI-PALS directory has information
                                    about hearing (audiology) services for
                                    children from birth to age five. All of the
                                    facilities in this directory report that
                                    they have the equipment and expertise to
                                    serve children and have licensed
                                    audiologists. The directory contains clinic
                                    information, including:
                                </p>
                                <ul className="mt-4 list-disc space-y-2 text-left text-gray-700">
                                    <li>Audiology (hearing) services</li>
                                    <li>Languages available</li>
                                    <li>Payment options</li>
                                    <li>Appointment availability</li>
                                </ul>
                                <p className="mt-4 text-gray-700">
                                    To learn more about childhood hearing loss
                                    and to find a pediatric audiologist, visit:
                                </p>
                                <a
                                    href="http://www.ehdi-pals.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="mt-4 rounded-md bg-hvorange px-4 py-2 text-white hover:bg-hvorange-700">
                                        Visit EHDI-PALS
                                    </button>
                                </a>
                            </div>
                            {/* Alabama Options for Services for Deaf/Hard of Hearing Children Section */}
                            <div className="mt-6 w-full bg-hvorange text-center">
                                <a
                                    href="https://www.alhearinglossoptions.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-white hover:underline"
                                >
                                    Alabama Options for Services for <br />
                                    Deaf/Hard of Hearing Children
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoGallery />
        </>
    )
}
