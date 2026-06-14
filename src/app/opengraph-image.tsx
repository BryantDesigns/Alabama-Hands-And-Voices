import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const alt = 'Alabama Hands & Voices'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'
export const runtime = 'nodejs'

const logoData = `data:image/png;base64,${readFileSync(
    join(process.cwd(), 'public/images/alabamahvlogo.png')
).toString('base64')}`

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    alignItems: 'center',
                    background: '#141B4B',
                    color: 'white',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '64px',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '38px',
                        textAlign: 'center',
                    }}
                >
                    <img
                        src={logoData}
                        alt=""
                        width={616}
                        height={200}
                        style={{
                            background: 'white',
                            borderRadius: '28px',
                            objectFit: 'contain',
                            padding: '22px 34px',
                        }}
                    />
                    <div
                        style={{
                            color: '#FF985B',
                            display: 'flex',
                            fontSize: '38px',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                        }}
                    >
                        SUPPORT. EDUCATION. ADVOCACY.
                    </div>
                </div>
            </div>
        ),
        size
    )
}
