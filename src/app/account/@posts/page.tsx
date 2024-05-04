import Title from "@/components/title";
import { sleep } from "@/lib/utils";

export default async function Page() {
	await sleep(3000);
	return (
		<div className="col-span-6 my-8 text-center w-full bg-gray-700">
			<Title text="Posts Page" />
		</div>
	);
}
