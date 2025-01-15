import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "TEST" }, { status: 200 });
}
