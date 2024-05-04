import { BASE_API_URL } from "@/constants/endpoint";
import { NextRequest } from "next/server";

export async function GET() {
	const res = await fetch(`${BASE_API_URL}/photos`);
	const data = await res.json();

	return Response.json({ data });
}

export async function POST(req: NextRequest) {
	const res = await fetch(`${BASE_API_URL}/posts`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(req.json()),
	});

	const data = await res.json();

	return Response.json(data);
}
