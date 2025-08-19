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
	title: "Frontend Developer Portfolio",
	description: "Professional portfolio showcasing frontend development skills and projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={poppins.variable}>
			<body className="font-poppins antialiased">{children}</body>
		</html>
	);
}
