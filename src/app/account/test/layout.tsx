import { ReactNode } from "react";

export default function Layout({
	children,
	posts,
	analytics,
}: {
	children: ReactNode;
	posts: ReactNode;
	analytics: ReactNode;
}) {
	return (
		<div className="grid place-items-center w-full gap-4 my-8">
			{children}
			{posts}
			{analytics}
		</div>
	);
}
