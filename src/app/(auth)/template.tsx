import { ReactNode } from "react";

export default function TemplatePage({ children }: { children: ReactNode }) {
	return (
		<>
			<h5 className="text-xl my-4">Template</h5>
			{children}
		</>
	);
}
