import Title from "@/components/title";
import { sleep } from "@/lib/utils";

export default async function Page() {
	await sleep(1000);
	return (
		<div className="col-span-6 bg-slate-400 my-8 w-full text-center">
			<Title text="Posts Page" />
		</div>
	);
}
