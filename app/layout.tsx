import type { Metadata } from 'next';
import { Fraunces, Barlow } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
	subsets: ['latin'],
	variable: '--font-fraunces',
	weight: ['900'],
	display: 'swap',
});

const barlow = Barlow({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-barlow',
	display: 'swap',
});

import Header from './ui/Header';
import Footer from './ui/Footer';

export const metadata: Metadata = {
	title: 'CoffeeRoasters',
	description: 'Project by FrontendMentors.  Built by Ryan McGuire',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={`${barlow.variable} ${fraunces.variable}`}>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
