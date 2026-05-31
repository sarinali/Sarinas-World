"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { companiies } from "@/constants/companies";
import { socials } from "@/constants/socials";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import PixelMosaic from "@/components/pixel-mosaic";

const cities = [
  { label: "Toronto", src: "/toronto.jpg", eyebrow: "based in Toronto" },
  { label: "SF", src: "/sf.jpg", eyebrow: "based in SF" },
  { label: "Hong Kong", src: "/hk.jpg", eyebrow: "previously based in HK" },
];

export default function SimpleHome() {
  const current = companiies[0];
  const past = companiies.slice(1);
  const [cityIndex, setCityIndex] = useState(0);
  const city = cities[cityIndex];

  return (
    <main className="max-w-[600px] mx-auto px-8 py-8">

      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1
            className="text-5xl font-bold leading-tight mb-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sarina Li
          </h1>
          <p className="text-gray-400 text-sm tracking-widest">李晶</p>
        </div>
        <div className="flex flex-col items-end gap-1.5 pt-2">
          {socials.slice(0, 4).map((s) => (
            <Link
              key={s.linkURL}
              href={s.linkURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors"
            >
              <s.icon width={13} height={13} />
              <span>{s.linkInfo.split(" ")[0]}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bio */}
      <p className="text-gray-600 leading-relaxed mb-5 max-w-sm">
        Hi! I&apos;m Sarina, an engineer at the intersection of research,
        engineering, and startups. Studying at UofT, previously on exchange at HKU.
      </p>

      {/* City carousel */}
      <div className="mb-6">
        <p
          className="text-xs text-gray-400 mb-1.5"
          style={{ fontFamily: "monospace" }}
        >
          {city.eyebrow}
        </p>

        <div className="overflow-hidden" style={{ aspectRatio: "6/1" }}>
          <PixelMosaic
            src={city.src}
            cellSize={4}
            gap={1}
            radius={1}
            renderWidth={600}
            renderHeight={100}
          />
        </div>

        <div className="flex justify-end gap-1.5 mt-1.5">
          {cities.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setCityIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === cityIndex ? "bg-gray-500" : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={c.label}
            />
          ))}
        </div>
      </div>

      {/* Currently */}
      <div className="mb-5">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2.5">
          Currently
        </p>
        <CompanyRow company={current} />
      </div>

      {/* Previously */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2.5">
          Previously
        </p>
        <div className="space-y-2.5">
          {past.map((c) => (
            <CompanyRow key={c.companyName} company={c} />
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-300 mt-8">Last updated: May 2026</p>
    </main>
  );
}

function CompanyRow({ company }: { company: (typeof companiies)[number] }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-start gap-3 group cursor-pointer">
          <Link
            href={company.companyURL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 mt-0.5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-6 h-6 rounded overflow-hidden bg-gray-100 transition-opacity group-hover:opacity-100 opacity-80">
              <Image
                src={company.companyImage}
                alt={company.companyName}
                width={24}
                height={24}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
          </Link>
          <div>
            <Link
              href={company.companyURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-800 hover:text-gray-900 underline underline-offset-2 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {company.companyName}
            </Link>
            {company.companyTeam && (
              <p className="text-xs text-gray-400 mt-0.5">{company.companyTeam}</p>
            )}
          </div>
        </div>
      </HoverCardTrigger>

      {company.companyTeam && (
        <HoverCardContent
          align="start"
          className="border-gray-200 bg-white/90 backdrop-blur-sm text-gray-600 shadow-md"
        >
          <p className="text-gray-900 font-medium text-sm mb-1">
            {company.companyTeam}
          </p>
          <p className="text-gray-500 text-sm leading-snug">
            {company.companyWorkDescription}
          </p>
        </HoverCardContent>
      )}
    </HoverCard>
  );
}
