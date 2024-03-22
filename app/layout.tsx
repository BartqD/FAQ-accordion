import type { Metadata } from 'next'
import './globals.css'
import { Work_Sans } from 'next/font/google'

export const metadata: Metadata = {
	title: 'FAQ accordion',
	description: 'FAQ accordion coding challenge',
}

const outfit = Work_Sans({ weight: ['400','600', '700'], subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={outfit.className}>{children}</body>
		</html>
	)
}
