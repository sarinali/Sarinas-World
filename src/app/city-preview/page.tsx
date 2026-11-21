"use client";
import Link from "next/link";
import WatercolorCity from "@/components/watercolor-city";
export default function CityPreview() { return <main className="max-w-[1000px] mx-auto px-8 py-12"><Link href="/" className="text-sm underline text-gray-500">Back to home</Link><h1 className="text-4xl mt-8 mb-3" style={{fontFamily:"var(--font-playfair)"}}>Cities in watercolor</h1><p className="text-gray-500 mb-10">Toronto, San Francisco, and Hong Kong — softened edges, translucent color, and paper grain.</p><div className="space-y-10">{[{label:"Toronto",src:"/toronto.jpg"},{label:"San Francisco",src:"/sf.jpg"},{label:"Hong Kong",src:"/hk.jpg"}].map(city=><section key={city.src}><h2 className="text-lg mb-3">{city.label}</h2><WatercolorCity {...city}/></section>)}</div></main>; }
