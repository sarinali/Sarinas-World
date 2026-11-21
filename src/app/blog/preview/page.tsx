import Link from "next/link";
import { blogs } from "@/data/blogs";
import { BlogCover } from "@/components/technical-blogs";
export default function Preview() {
return <main className="max-w-[1200px] mx-auto px-6 py-12"><Link href="/" className="text-sm text-gray-500 underline">Sarina Li</Link><h1 className="text-4xl mt-10 mb-3" style={{fontFamily:"var(--font-playfair)"}}>Two ways to soften the edges.</h1><p className="text-gray-500 mb-10">Three palettes. The same stories. Compare blurred light with pigment and paper.</p><div className="grid md:grid-cols-2 gap-x-10 gap-y-12">{blogs.map(post => (["mesh", "watercolor"] as const).map(variant => <article key={post.slug+variant}><p className="text-sm text-gray-500 mb-3">{variant === "mesh" ? "01 / Blurred mesh" : "02 / Watercolor wash"} · {post.theme === "forest" ? "Forest mist" : post.theme === "indigo" ? "Midnight blue" : "Smoked plum"}</p><BlogCover post={post} variant={variant}/><p className="blog-meta">{post.date} · {post.category}</p><h2 className="text-xl mt-2 leading-snug">{post.title}</h2></article>))}</div></main>;
}
