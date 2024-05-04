import Link from "next/link";
import Heading from "../_components/heading";

export default async function Page() {
	return (
		<div>
			<Heading text="Sign up" />

			<div className="flex">
				<p>Already have an account,</p>{" "}
				<Link href="/login">
					<span className="text-blue-400 px-1">Login</span>
				</Link>{" "}
				here
			</div>
		</div>
	);
}
