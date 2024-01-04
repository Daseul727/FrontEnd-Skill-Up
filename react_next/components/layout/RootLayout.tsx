import { Noto_Sans_KR } from 'next/font/google'
import React from 'react'

const notoSansKr = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['100', '400', '700', '900'],
    variable: '--font-notoSansKr',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <div className={`${notoSansKr.className}`}>{children}</div>
}
