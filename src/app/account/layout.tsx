import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({
	children,
	posts,
	analytics
}: {
	children: ReactNode;
	posts: ReactNode;
	analytics: ReactNode;
}) {
	return (
		<>
			<div className="flex my-4">
				<ul className="list-none">
					<li>
						<Link href="/account/test">Got to test</Link>
					</li>
					<li>
						<Link href="/account">Got to account</Link>
					</li>
				</ul>
			</div>
			<div className="grid place-items-center w-full gap-4 my-8">
				{children}
				{posts}
				{analytics}
			</div>
		</>
	);
}
