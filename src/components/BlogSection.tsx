import { blogPosts } from "../config/data";
import { formatDate } from "../config/constants";
import Button from "./Button";

function FeaturedPost({
  post,
}: {
  post: (typeof blogPosts)[0];
}) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col justify-end rounded-2xl overflow-hidden min-h-105 bg-background-dark"
    >
      {/* Background image */}
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />

      {/* Gradient scrim */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-secondary-light bg-secondary/20 border border-secondary/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
            Featured
          </span>
          <span className="text-white/60 text-xs">{post.readTime} min read</span>
        </div>

        <h3 className="text-white font-bold text-xl leading-snug mb-2 group-hover:text-secondary-light transition-colors line-clamp-3">
          {post.title}
        </h3>

        <p className="text-white/70 text-sm line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-white/50 text-xs">{formatDate(post.date)}</span>
          <span className="text-secondary-light text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}

// ─── Small post row (right side list) ────────────────────────────────────────

function SmallPost({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
    >
      {/* Thumbnail */}
      <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-border">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] text-text-muted">{formatDate(post.date)}</span>
          <span className="text-border-dark">·</span>
          <span className="text-[10px] text-text-muted">{post.readTime} min read</span>
        </div>
        <h4 className="font-semibold text-text text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h4>
        <p className="text-text-muted text-xs mt-1 line-clamp-1">
          {post.excerpt}
        </p>
      </div>
    </a>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function BlogSection() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
              <span className="w-5 h-0.5 bg-secondary rounded-full" />
              From the Trail
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Latest Posts
            </h2>
            <p className="mt-2 text-text-muted max-w-md">
              Trek guides, destination deep-dives, and stories from the Himalayas.
            </p>
          </div>
          <Button variant="outline" href="/blog" className="shrink-0">
            View All Posts
          </Button>
        </div>

        {/* ── Layout: featured left + list right ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured — takes 2/5 of the width on desktop */}
          <div className="lg:col-span-2">
            <FeaturedPost post={featured} />
          </div>

          {/* Remaining posts stacked on the right — 3/5 */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {rest.map((post) => (
              <SmallPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}