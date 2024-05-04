import { BASE_API_URL } from "@/constants/endpoint";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const postId = req.nextUrl.searchParams.get("postId") || "1";
	const res = await fetch(`${BASE_API_URL}/comments?postId=${Number(postId)}`);
	const data = await res.json();

	return Response.json({ data });
}
