import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type Traveler = {
  id: string;
  name: string;
  phone: string;
  city: string;
  seats: number;
  createdAt: string;
};

export type PublicTraveler = {
  id: string;
  name: string;
  city: string;
  seats: number;
};

type Store = {
  travelers: Traveler[];
  drawIds: string[];
};

const filePath = path.join(process.cwd(), "data", "signups.json");

async function readStore(): Promise<Store> {
  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as Store;
    return {
      travelers: Array.isArray(parsed.travelers) ? parsed.travelers : [],
      drawIds: Array.isArray(parsed.drawIds) ? parsed.drawIds : [],
    };
  } catch {
    return { travelers: [], drawIds: [] };
  }
}

async function writeStore(store: Store) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(store, null, 2));
}

export function toPublic(traveler: Traveler): PublicTraveler {
  return {
    id: traveler.id,
    name: traveler.name,
    city: traveler.city,
    seats: traveler.seats,
  };
}

export async function listSignups() {
  const store = await readStore();
  const drawn = new Set(store.drawIds);
  return {
    travelers: store.travelers.map(toPublic),
    group: store.drawIds
      .map((id) => store.travelers.find((traveler) => traveler.id === id))
      .filter((traveler): traveler is Traveler => Boolean(traveler) && drawn.has(traveler.id))
      .map(toPublic),
  };
}

export async function addSignup(input: {
  name: string;
  phone: string;
  city: string;
  seats: number;
}) {
  const store = await readStore();
  const traveler: Traveler = {
    id: randomUUID(),
    name: input.name,
    phone: input.phone,
    city: input.city,
    seats: input.seats,
    createdAt: new Date().toISOString(),
  };
  store.travelers.push(traveler);
  await writeStore(store);
  return toPublic(traveler);
}

export function shuffle<T>(items: T[]) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [next[index], next[swap]] = [next[swap], next[index]];
  }
  return next;
}

export async function drawGroup(count: number) {
  const store = await readStore();
  if (store.travelers.length < 2) {
    throw new Error("NEED_TWO");
  }
  const size = Math.min(count, store.travelers.length);
  const picked = shuffle(store.travelers).slice(0, size);
  store.drawIds = picked.map((traveler) => traveler.id);
  await writeStore(store);
  return picked.map(toPublic);
}
