import { getAllPostsMeta } from "@/lib/mdx"
import { NextResponse } from "next/server"

export async function GET() {
  const data = await getAllPostsMeta()

  return NextResponse.json(data, { status: 200 })
}
