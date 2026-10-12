import { connection } from "next/server";
import { addSignup, listSignups } from "@/lib/signups";

export async function GET() {
  await connection();
  const data = await listSignups();
  return Response.json(data);
}

export async function POST(request: Request) {
  await connection();
  const body = (await request.json()) as {
    name?: string;
    phone?: string;
    city?: string;
    seats?: number;
  };
  const name = body.name?.trim().replace(/\s+/g, " ") ?? "";
  const city = body.city?.trim().replace(/\s+/g, " ") ?? "";
  const digits = (body.phone ?? "").replace(/\D/g, "");
  const phone = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  const seats = Number(body.seats);

  if (name.length < 2 || name.length > 40) {
    return Response.json({ error: "name" }, { status: 400 });
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    return Response.json({ error: "phone" }, { status: 400 });
  }
  if (city.length < 2 || city.length > 40) {
    return Response.json({ error: "city" }, { status: 400 });
  }
  if (!Number.isInteger(seats) || seats < 1 || seats > 8) {
    return Response.json({ error: "seats" }, { status: 400 });
  }

  const traveler = await addSignup({ name, phone, city, seats });
  return Response.json({ traveler });
}
