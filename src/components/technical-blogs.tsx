import Link from "next/link";
import { blogs } from "@/data/blogs";

export function BlogCover({ post, variant = "watercolor" }: { post: (typeof blogs)[number]; variant?: "mesh" | "watercolor" }) {
  if (post.slug === "professional-life-2023-2025") {
    return <div className="blog-cover work-cover" aria-label="Work, with four photos from my internships">
      <img className="work-photo work-photo-mozilla" src="/covers/work/mozilla.png" alt="Mozilla interns" />
      <img className="work-photo work-photo-bmo" src="/covers/work/bmo.png" alt="BMO co-op class" />
      <span className="work-cover-word" style={{ fontFamily: "inherit", fontWeight: 400 }}>Work</span>
      <img className="work-photo work-photo-dinner" src="/covers/work/confluent.png" alt="Confluent interns" />
      <img className="work-photo work-photo-confluent" src="/covers/work/dinner.png" alt="Team dinner" />
    </div>;
  }
  return <div className={`blog-cover blog-cover--${post.theme} blog-cover--${variant}`}><div className="blog-cover-colors" style={{backgroundImage: `url(/covers/${post.theme}-noise.png)`}} /><div className="blog-cover-grain" /><div className="blog-cover-brand">{/* Official company mark */}{post.company === "Sarina Li" ? <span className="personal-cover-title">{post.category}</span> : <img src={post.company === "Sieve" ? "/brands/sieve-white.svg" : "/brands/cua-white.svg"} alt={post.company} width={180} height={64} />}</div></div>;
}
export default function TechnicalBlogs() {
  const livingSlugs = new Set(["pencils-journey", "professional-life-2023-2025"]);
  const sections = [
    { title: "Technical blogs", id: "technical-blogs-heading", posts: blogs.filter(post => !livingSlugs.has(post.slug)) },
    { title: "Living", id: "living-heading", posts: blogs.filter(post => livingSlugs.has(post.slug)) },
  ];
  return <>{sections.map(section => <section key={section.id} className="technical-blogs" aria-labelledby={section.id}>
    <h2 id={section.id} className="text-xl mb-6" style={{fontFamily: "var(--font-playfair)"}}>{section.title}</h2>
    <div className="blog-grid">{section.posts.map((post, i) => <Link href={`/blog/${post.slug}`} key={post.slug} className={`blog-card ${section.id === "technical-blogs-heading" && i === 0 ? "blog-featured" : ""}`}>
      <BlogCover post={post} /><div className="blog-card-copy"><p className="blog-meta">{post.date} · {post.category}</p><h3>{post.title}</h3></div>
    </Link>)}</div>
  </section>)}</>;
}
