import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div>
			<h3 className="text-xl my-4">Auth Layout</h3>
			{children}
		</div>
	);
}
