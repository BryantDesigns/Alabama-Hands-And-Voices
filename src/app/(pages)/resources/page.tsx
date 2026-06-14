import Image from 'next/image'
import VideoGallery from '@/components/common/VideoGallery'
import React from 'react'
import { getResourcesPageContent } from '@/lib/keystatic/pages'
import { getVideosByPlacement } from '@/lib/keystatic/collections'

export default async function ResourcesPage() {
    const [data, videos] = await Promise.all([
        getResourcesPageContent(),
        getVideosByPlacement('resources'),
    ])

    const introCopy =
        data?.introCopy ??
        'Below is a list of valuable resources and organizations providing support for families with children who are deaf or hard of hearing.'
    const categories = data?.resourceCategories ?? []
    const ehdiSidebarBody = data?.ehdiSidebarBody ?? ''
    const ehdiSidebarUrl = data?.ehdiSidebarUrl ?? 'http://www.ehdi-pals.org/'

    return (
        <main>
            <section className="bg-hvblue py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Alabama Hands & Voices Resources
                    </h1>
                    <p className="mt-6 text-center text-lg leading-relaxed text-gray-200">
                        {introCopy}
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
                                                        .reduce<
                                                            {
                                                                name: string
                                                                url: string
                                                            }[][]
                                                        >(
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
                                                            [] // This ensures TypeScript knows the accumulator is an array of arrays of resources
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
                                                                    )}
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
                                    {ehdiSidebarBody}
                                </p>
                                <a
                                    href={ehdiSidebarUrl}
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
            <VideoGallery videos={videos} />
        </>
    )
}
