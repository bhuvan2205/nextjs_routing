import Title from "@/components/title";
import { sleep } from "@/lib/utils";

export default async function Page() {
	await sleep(1500);
	return (
		<div className="col-span-6 my-8 text-center w-full bg-green-700">
			<Title text="Analytics Page" />
		</div>
	);
}
