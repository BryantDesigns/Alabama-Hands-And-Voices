'use client'
import React from 'react'
import { Timestamp } from 'firebase/firestore'

interface ChangeHistoryProps {
    history: Array<{
        id: string
        content: string
        timestamp: Timestamp
    }>
    loading: boolean
}

const ChangeHistory: React.FC<ChangeHistoryProps> = ({ history, loading }) => {
    if (loading) return <p>Loading history...</p>

    return (
        <div className="mt-6 hidden">
            <h2 className="mb-4 text-lg font-bold">Change History</h2>
            {history.length === 0 ? (
                <p className="text-gray-500">No history available.</p>
            ) : (
                <ul className="space-y-4">
                    {history.map((entry) => (
                        <li
                            key={entry.id}
                            className="rounded bg-gray-100 p-4 shadow"
                        >
                            <p className="text-sm text-gray-500">
                                {new Date(
                                    entry.timestamp.toDate()
                                ).toLocaleString()}
                            </p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: entry.content,
                                }}
                                className="text-gray-700"
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ChangeHistory
