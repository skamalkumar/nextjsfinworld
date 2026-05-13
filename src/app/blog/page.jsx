import Link from "next/link";

export const revalidate = 3600;

export const metadata = {
  title: "Blog | FinWorld",
  description: "Explore financial insights, Nifty analysis, investment guides and expert articles from FinWorld.",
};

function slugToTitle(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function getImageUrl(slug) {
  const extensions = [".webp", ".jpg", ".png"];
  const base = `https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/content/images/${encodeURIComponent(slug)}`;
  
  for (const ext of extensions) {
    try {
      const res = await fetch(base + ext, { method: "HEAD", next: { revalidate: 3600 } });
      if (res.ok) return base + ext;
    } catch {
      continue;
    }
  }
  return null;
}

export default async function BlogPage() {
  let posts = [];

  try {
    const res = await fetch(
      "https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles",
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();

    if (Array.isArray(data)) {
      const slugs = data
        .filter((item) => item.name.endsWith(".html"))
        .map((item) => item.name.replace(".html", ""));

      posts = await Promise.all(
        slugs.map(async (slug) => ({
          slug,
          title: slugToTitle(slug),
          imageUrl: await getImageUrl(slug),
        }))
      );
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
          >
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block text-blue-500 font-semibold mt-4 hover:text-blue-600"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

