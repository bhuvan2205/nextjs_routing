"use client"; // Error components must be Client Components

export default function Error({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div>
			<h2 className="text-4xl my-4">Something went wrong!</h2>
			<button
				className="bg-teal-100 text-black px-4 py-2 rounded"
				onClick={reset}>
				Try again
			</button>
		</div>
	);
}
