import Title from "@/components/title";
import { sleep } from "@/lib/utils";

export default async function Page() {
	await sleep(500);
	return (
		<div className="col-span-6 bg-slate-400 my-8 text-center">
			<Title text="Default Posts Page" />
		</div>
	);
}
