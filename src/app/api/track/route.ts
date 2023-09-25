import { getData } from "@/app/lib/getData";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    return NextResponse.json(await getData());
  } catch (e: any) {
    return NextResponse.json("Something went wrong");
  }
}
