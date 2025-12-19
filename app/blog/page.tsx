import { getBlogs } from "@/lib/api";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt?: string;
  coverImageUrl?: string;
  publishedAt?: string;
  tags?: string[];
  status: string;
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  const published = blogs.filter((b: Blog) => b.status === "published");

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <p className="text-sm text-slate-400">
          Notes on web development, backend, and building custom CMS systems.
        </p>
      </header>

      {published.length === 0 && (
        <p className="text-sm text-slate-400">No published posts yet.</p>
      )}

      <div className="space-y-4">
        {published.map((post: Blog) => (
          <a
            key={post._id}
            href={`/blog/${post.slug}`}
            className="block rounded-xl border border-slate-800 bg-slate-900/40 p-4 hover:border-emerald-500/60 transition"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {post.coverImageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.coverImageUrl}
                  alt={post.title}
                  className="w-full md:w-40 h-32 rounded-md object-cover border border-slate-800"
                />
              )}
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                {post.publishedAt && (
                  <p className="text-[11px] text-slate-400">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                )}
                {post.excerpt && (
                  <p className="text-sm text-slate-300 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <p className="text-[11px] text-slate-400">
                    {post.tags.join(" · ")}
                  </p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
