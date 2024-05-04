import Title from "@/components/title";
import { sleep } from "@/lib/utils";

export default async function Page() {
	await sleep(2000);
	return (
		<div className="col-span-12 text-center bg-purple-700 my-8">
			<Title text="Account Page" />
			<p className="pb-4 text-lg">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque minima,
				cupiditate accusantium adipisci, ex voluptate obcaecati quia et quas
				aperiam pariatur libero, illum quis voluptates exercitationem animi
				provident nesciunt. Rem eligendi tenetur, repellat facere alias commodi
				id totam cupiditate? Blanditiis non temporibus eaque. Ipsam, similique.
				Nam nobis alias voluptate nostrum.
			</p>
		</div>
	);
}
