// app/blog/[slug]/page.js

export const dynamic = 'force-static';
export const revalidate = 3600;

const BASE_URL = "https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/content/articles";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles"
    );
    const files = await res.json();
    return files
      .filter((f) => f.name.endsWith(".html"))
      .map((f) => ({ slug: f.name.replace(".html", "") }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const title = slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} | FinWorld`,
    description: `Read our in-depth article on ${title}. Expert financial insights from FinWorld.`,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = params;

  const res = await fetch(`${BASE_URL}/${slug}.html`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return <div>Post not found</div>;

  const content = await res.text();

  return (
    <article className="max-w-4xl mx-auto p-6 bg-transparent rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">
        {slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
      </h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <a href="/blog" className="text-blue-500 mt-6 inline-block">
        ← Back to Blog
      </a>
    </article>
  );
}