import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Next App",
	description: "To learn more about Advanced Routing concepts of Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${poppins.className} bg-gray-900 text-teal-50`}>
				<Header />
				<div className="container mx-auto">{children}</div>
			</body>
		</html>
	);
}
