async function getPost(slug) {
  const res = await fetch(
    `https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/content/articles/${slug}.html`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return null;
  return res.text();
}

function extractMeta(html, name) {
  const match = html.match(
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`, "i")
  ) || html.match(
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`, "i")
  );
  return match ? match[1] : null;
}

function extractTitle(html) {
  const match = html.match(/<title>(.*?)<\/title>/i);
  return match ? match[1] : null;
}

function extractBody(html) {
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return match ? match[1] : html;
}

function extractStyles(html) {
  const styles = [];
  const regex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    styles.push(match[0]);
  }
  return styles.join("\n");
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles"
  );
  const data = await res.json();
  return data
    .filter((item) => item.name.endsWith(".html"))
    .map((item) => ({ slug: item.name.replace(".html", "") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const html = await getPost(slug);
  if (!html) return {};

  return {
    title: extractTitle(html),
    description: extractMeta(html, "description"),
    keywords: extractMeta(html, "keywords"),
    openGraph: {
      title: extractTitle(html),
      description: extractMeta(html, "description"),
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const html = await getPost(slug);

  if (!html) {
    return <div className="text-center py-20 text-gray-500">Post not found.</div>;
  }

  const bodyContent = extractBody(html);
  const styles = extractStyles(html);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: styles }} />
      <article dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </div>
  );
}