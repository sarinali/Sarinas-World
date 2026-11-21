import article0 from "@/content/vectoradam-on-a-sphere.json";
import article1 from "@/content/professional-life-2023-2025.json";
import article2 from "@/content/pencils-journey.json";
import sieveArticle from "@/content/embedding-billions-of-videos.json";
import neuripsArticle from "@/content/neurips-2025-cua-papers.json";
import growthArticle from "@/content/computer-use-agents-for-growth-hacking.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { BlogCover } from "@/components/technical-blogs";
const articles: Record<string, {html: string}> = { "vectoradam-on-a-sphere": article0, "professional-life-2023-2025": article1, "pencils-journey": article2, "embedding-billions-of-videos": sieveArticle, "neurips-2025-cua-papers": neuripsArticle, "computer-use-agents-for-growth-hacking": growthArticle };
export function generateStaticParams() { return blogs.map(({slug}) => ({slug})); }
export default async function BlogPage({params}: {params: Promise<{slug: string}>}) {
 const {slug} = await params; const post = blogs.find(p => p.slug === slug); if (!post) notFound();
 return <main className="max-w-[720px] mx-auto px-8 py-12"><Link href="/" className="text-sm text-gray-500 underline underline-offset-4">Sarina Li</Link><article className="mt-10"><p className="blog-meta">{post.date} · {post.company} · {post.category}</p><h1 className="text-3xl sm:text-4xl leading-tight mt-4 mb-8" style={{fontFamily:"var(--font-playfair)"}}>{post.title}</h1><BlogCover post={post}/><p className="text-sm text-gray-400 mt-6 mb-6">{("personal" in post) ? "Sarina Li · Compiled from my original notes" : `Originally published at ${post.company} · Republished with permission`}</p><div className="imported-article" dangerouslySetInnerHTML={{__html: articles[slug].html}} /></article></main>;
}
