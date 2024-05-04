import Link from "next/link";
import Heading from "../_components/heading";

export default async function Page() {
	return (
		<div>
			<Heading text="Login" />

			<div className="flex">
				<p>{"Don't"} have an account,</p>{" "}
				<Link href="/signup">
					<span className="text-blue-400 px-1">Register</span>
				</Link>{" "}
				here
			</div>
		</div>
	);
}
