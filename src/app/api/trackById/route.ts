import { getDataByTrackId } from "@/app/lib/getData";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const res = await req.json();
    return NextResponse.json(await getDataByTrackId(res.id));
  } catch (e: any) {
    return NextResponse.json("Something went wrong");
  }
}
