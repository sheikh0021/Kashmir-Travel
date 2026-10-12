"use client";

import { FormEvent, useEffect, useState } from "react";
import { useLanguage } from "@/components/language";
import { SampleBadge, SectionIntro } from "@/components/ui";
import { whatsappHref } from "@/lib/site";

type Person = {
  id: string;
  name: string;
  city: string;
  seats: number;
};

const samplePeople: Person[] = [
  { id: "s1", name: "Ayesha", city: "Jabalpur", seats: 1 },
  { id: "s2", name: "Rohan", city: "Bhopal", seats: 2 },
  { id: "s3", name: "Fatima", city: "Katni", seats: 1 },
  { id: "s4", name: "Vivek", city: "Sagar", seats: 1 },
  { id: "s5", name: "Noor", city: "Jabalpur", seats: 2 },
  { id: "s6", name: "Imran", city: "Rewa", seats: 1 },
  { id: "s7", name: "Sara", city: "Indore", seats: 1 },
  { id: "s8", name: "Adil", city: "Jabalpur", seats: 1 },
];

function shuffle<T>(items: T[]) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [next[index], next[swap]] = [next[swap], next[index]];
  }
  return next;
}

export function StrangersView() {
  const { lang, t } = useLanguage();
  const copy = t.family;
  const [people, setPeople] = useState<Person[]>([]);
  const [group, setGroup] = useState<Person[]>([]);
  const [sampleDraw, setSampleDraw] = useState(true);
  const [count, setCount] = useState(6);
  const [drawing, setDrawing] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [seats, setSeats] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const pool = people.length > 0 ? people : samplePeople;
  const usingSample = people.length === 0;

  useEffect(() => {
    let ignore = false;
    async function load() {
      const response = await fetch("/api/signups");
      if (!response.ok) return;
      const data = (await response.json()) as { travelers: Person[]; group: Person[] };
      if (ignore) return;
      setPeople(data.travelers);
      if (data.group.length > 0) {
        setGroup(data.group);
        setSampleDraw(false);
      }
    }
    void load();
    return () => {
      ignore = true;
    };
  }, []);

  async function onDraw() {
    if (drawing) return;
    if (!usingSample && people.length < 2) return;
    setDrawing(true);
    setSampleDraw(usingSample);
    const ticks = 8;
    for (let tick = 0; tick < ticks; tick += 1) {
      setGroup(shuffle(pool).slice(0, Math.min(count, pool.length)));
      await new Promise((resolve) => setTimeout(resolve, 90));
    }
    if (usingSample) {
      setGroup(shuffle(samplePeople).slice(0, Math.min(count, samplePeople.length)));
      setDrawing(false);
      return;
    }
    const response = await fetch("/api/draw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count }),
    });
    if (response.ok) {
      const data = (await response.json()) as { group: Person[] };
      setGroup(data.group);
      setSampleDraw(false);
    }
    setDrawing(false);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);
    const response = await fetch("/api/signups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, city, seats }),
    });
    const data = (await response.json()) as { error?: string; traveler?: Person };
    if (!response.ok) {
      setError(
        data.error === "phone" ? copy.errPhone : data.error === "city" ? copy.errCity : copy.errName,
      );
      return;
    }
    if (data.traveler) {
      setPeople((current) => [...current, data.traveler!]);
    }
    const message =
      lang === "hi"
        ? `नमस्ते Al Safar, मुझे अजनबियों से परिवार वाले ड्रॉ में जोड़ें। नाम: ${name.trim()}, शहर: ${city.trim()}, सीटें: ${seats}, फ़ोन: ${phone.trim()}`
        : `Hello Al Safar, please add me to the strangers-to-family draw. Name: ${name.trim()}, city: ${city.trim()}, seats: ${seats}, phone: ${phone.trim()}`;
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    setName("");
    setPhone("");
    setCity("");
    setSeats(1);
    setSuccess(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <section className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="label-track mb-4 text-xs text-gold">{copy.kicker}</p>
          <h1 className="font-display text-5xl leading-[0.95] text-navy sm:text-7xl">
            {copy.title}
            <span className="title-accent block text-gold">{copy.titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">{copy.lead}</p>
        </div>
        <ol className="card space-y-5 rounded-[2rem] border border-sand p-6 sm:p-8">
          {copy.steps.map((step) => (
            <li key={step.n} className="grid grid-cols-[auto_1fr] gap-4">
              <span className="font-display text-2xl text-gold">{step.n}</span>
              <span>
                <span className="block font-medium text-navy">{step.title}</span>
                <span className="mt-1 block text-sm leading-6 text-mist">{step.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionIntro title={copy.poolTitle} lead={copy.poolLead} />
          {usingSample ? (
            <p className="mt-4 flex flex-wrap items-center gap-3 text-sm text-mist">
              <SampleBadge />
              {copy.sampleNote} {copy.empty}
            </p>
          ) : null}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {pool.map((person) => (
              <li key={person.id} className="card rounded-3xl border border-sand px-5 py-4">
                <p className="font-display text-2xl text-navy">{person.name}</p>
                <p className="text-sm text-mist">
                  {person.city}
                  <span className="px-2 text-sand">·</span>
                  {person.seats} {copy.seats}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel-dusk rounded-[2rem] p-6 text-cream sm:p-8">
          <h2 className="font-display text-4xl">{copy.groupTitle}</h2>
          <label className="mt-6 block text-sm text-cream/70" htmlFor="draw-count">
            {copy.countLabel}
          </label>
          <input
            id="draw-count"
            className="mt-2 w-24 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-cream"
            type="number"
            min={2}
            max={Math.max(pool.length, 2)}
            value={count}
            onChange={(event) => setCount(Number(event.target.value))}
          />
          <button
            type="button"
            className="btn-gold mt-6"
            onClick={() => void onDraw()}
            disabled={drawing || (!usingSample && people.length < 2)}
          >
            {drawing ? copy.drawing : group.length > 0 ? copy.redraw : copy.draw}
          </button>
          {!usingSample && people.length < 2 ? (
            <p className="mt-3 text-sm text-cream/70">{copy.needTwo}</p>
          ) : null}
          <ul className="mt-8 space-y-3" aria-live="polite">
            {group.length === 0 ? <li className="text-cream/60">{copy.waiting}</li> : null}
            {group.map((person, index) => (
              <li key={person.id} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
                <span>
                  <span className="mr-3 font-display text-gold-bright">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-lg">{person.name}</span>
                </span>
                <span className="text-sm text-cream/60">{person.city}</span>
              </li>
            ))}
          </ul>
          {group.length > 0 && sampleDraw ? (
            <p className="mt-4 text-sm text-cream/70">{copy.sampleNote}</p>
          ) : null}
        </div>
      </section>

      <section className="mt-16 max-w-xl">
        <SectionIntro title={copy.formTitle} lead={copy.formLead} />
        <form className="mt-8 space-y-4" onSubmit={(event) => void onSubmit(event)}>
          <label className="block text-sm text-navy">
            {copy.name}
            <input
              className="mt-1 w-full rounded-2xl border border-sand bg-white px-4 py-3"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              maxLength={40}
            />
          </label>
          <label className="block text-sm text-navy">
            {copy.phone}
            <input
              className="mt-1 w-full rounded-2xl border border-sand bg-white px-4 py-3"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              inputMode="tel"
              required
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-[1fr_8rem]">
            <label className="block text-sm text-navy">
              {copy.city}
              <input
                className="mt-1 w-full rounded-2xl border border-sand bg-white px-4 py-3"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
                maxLength={40}
              />
            </label>
            <label className="block text-sm text-navy">
              {copy.seats}
              <select
                className="mt-1 w-full rounded-2xl border border-sand bg-white px-4 py-3"
                value={seats}
                onChange={(event) => setSeats(Number(event.target.value))}
              >
                {[1, 2, 3, 4, 5, 6].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {error ? <p className="text-sm text-navy">{error}</p> : null}
          {success ? (
            <p className="text-sm text-navy">
              {copy.success} {copy.confirm}
            </p>
          ) : null}
          <button className="btn-primary" type="submit">
            {copy.submit}
          </button>
        </form>
      </section>
    </div>
  );
}
