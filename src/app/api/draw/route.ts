import { connection } from "next/server";
import { drawGroup } from "@/lib/signups";

export async function POST(request: Request) {
  await connection();
  const body = (await request.json()) as { count?: number };
  const count = Number(body.count);
  if (!Number.isInteger(count) || count < 2 || count > 24) {
    return Response.json({ error: "count" }, { status: 400 });
  }
  try {
    const group = await drawGroup(count);
    return Response.json({ group, sample: false });
  } catch (error) {
    if (error instanceof Error && error.message === "NEED_TWO") {
      return Response.json({ error: "need-two" }, { status: 400 });
    }
    throw error;
  }
}
