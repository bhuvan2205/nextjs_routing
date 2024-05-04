import { ReactNode } from "react";

export default function Layout({
	children,
	analytics,
	posts,
	payments,
}: {
	children: ReactNode;
	analytics: ReactNode;
	posts: ReactNode;
	payments: ReactNode;
}) {
	const user = getUser();

	if (!user.hasAccess) {
		return payments;
	}

	return (
		<div className="grid place-items-center w-full gap-4 my-8">
			{children}
			{analytics}
			{posts}
		</div>
	);
}

export const getUser = () => {
	return {
		id: 1,
		name: "john",
		hasAccess: false,
	};
};
