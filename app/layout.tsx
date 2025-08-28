import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata: Metadata = {
	title: "CalvinAprilian - Frontend Developer Portfolio",
	description: "Professional portfolio of CalvinAprilian, a passionate frontend developer specializing in React, Next.js, and modern web technologies",
	keywords: ["frontend developer", "react", "next.js", "typescript", "portfolio", "calvin aprilian"],
	authors: [{ name: "CalvinAprilian" }],
	creator: "CalvinAprilian",
	publisher: "CalvinAprilian",
	robots: "index, follow",
	openGraph: {
		title: "CalvinAprilian - Frontend Developer Portfolio",
		description: "Professional portfolio of CalvinAprilian, a passionate frontend developer specializing in React, Next.js, and modern web technologies",
		type: "website",
		locale: "en_US",
		siteName: "CalvinAprilian Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "CalvinAprilian - Frontend Developer Portfolio",
		description: "Professional portfolio of CalvinAprilian, a passionate frontend developer specializing in React, Next.js, and modern web technologies",
	},
	icons: {
		icon: [
			{ url: "/favicon.svg", type: "image/svg+xml" },
			{ url: "/favicon.ico", sizes: "any" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={poppins.variable}>
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</head>
			<body className="font-poppins antialiased">{children}</body>
		</html>
	);
}
