import Link from "next/link";

export default function Header() {
	return (
		<header className="flex justify-between items-center py-2 px-10 bg-teal-800 w-full max-w-screen">
			<div className="text-2xl font-bold cursor-pointer">Next</div>
			<nav>
				<ul className="flex text-xl font-semibold">
					<li className="px-4">
						<Link href="/">Home</Link>
					</li>
					<li className="px-4">
						<Link href="/dashboard">Dashboard</Link>
					</li>
					<li className="px-4">
						<Link href="/account">Account</Link>
					</li>
					<li className="px-4">
						<Link href="/about">About</Link>
					</li>
					<li className="px-4">
						<Link href="/login">Login</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
