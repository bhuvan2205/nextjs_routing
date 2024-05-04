import { sleep } from "@/lib/utils";

export default async function Home() {
	await sleep();
	return (
		<main>
			<h1 className="text-4xl my-4">Home</h1>
			<p className="text-xl">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus deserunt
				consequuntur quod cupiditate sit tenetur magni accusamus corrupti ex
				exercitationem?
			</p>
		</main>
	);
}
