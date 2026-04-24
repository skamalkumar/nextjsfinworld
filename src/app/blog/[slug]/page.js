// app/blog/[slug]/page.js

export default async function BlogPost({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/content/articles/${slug}.html`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return <div>Post not found</div>;
    }

    const content = await res.text();

    return (
      <article className="max-w-4xl mx-auto p-6 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{slug.replaceAll('-', ' ')}</h1>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <a href="/blog" className="text-blue-500 mt-6 inline-block">
          ← Back to Blog
        </a>
      </article>
    );
  } catch (error) {
    return <div>Error loading post</div>;
  }
}