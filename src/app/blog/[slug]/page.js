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
      <div className="min-h-screen">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="max-w-4xl mx-auto px-6 pb-8">
          <a href="/blog" className="text-blue-400 inline-block">
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  } catch (error) {
    return <div>Error loading post</div>;
  }
}