"use client";
import { useState } from "react";

const filters = ["All", "LenaMiu", "Lena", "Miu"];

const data = [
  { title: "ElleThailand (14/02)", type: "LenaMiu", isNew: true, url: "#" },
  { title: "ElleThailand – MiuPost (13/02)", type: "Miu", isNew: false, url: "#" },
  { title: "ElleThailand – Lena (13/02)", type: "Lena", isNew: false, url: "#" },
];

export default function Home() {
  const [active, setActive] = useState("All");
  const show =
    active === "All" ? data : data.filter((d) => d.type === active);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-center mb-8">
        <button className="border px-5 py-2 rounded-full">VOTE</button>
      </div>

      <div className="flex gap-3 justify-center mb-8">
        {filters.map((f) => (
          <button key={f} onClick={() => setActive(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {show.map((item) => (
          <a key={item.title} href={item.url} target="_blank">
            {item.title} {item.isNew && "NEW"}
          </a>
        ))}
      </div>
    </main>
  );
}
