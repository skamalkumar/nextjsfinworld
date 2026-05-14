export const revalidate = 3600;

export default async function sitemap() {
  // Static pages with proper priorities
  const staticPages = [
    { url: "https://www.finworldltd.online", priority: 1.0 },
    { url: "https://www.finworldltd.online/home", priority: 1.0 },
    { url: "https://www.finworldltd.online/blog", priority: 0.9 },
    { url: "https://www.finworldltd.online/aboutus", priority: 0.8 },
    { url: "https://www.finworldltd.online/contactus", priority: 0.8 },
    { url: "https://www.finworldltd.online/mutual-funds", priority: 0.8 },
    { url: "https://www.finworldltd.online/financialhealthscore", priority: 0.7 },
    { url: "https://www.finworldltd.online/financialplanning/investmentplanning", priority: 0.7 },
    { url: "https://www.finworldltd.online/financialplanning/taxplanning", priority: 0.7 },
    { url: "https://www.finworldltd.online/financialplanning/willplanning", priority: 0.7 },
    { url: "https://www.finworldltd.online/financialplanning/insuranceplanning/lifeinsurance", priority: 0.7 },
    { url: "https://www.finworldltd.online/financialplanning/insuranceplanning/healthinsurance", priority: 0.7 },
    { url: "https://www.finworldltd.online/financialplanning/insuranceplanning/accidentinsurance", priority: 0.7 },
    { url: "https://www.finworldltd.online/financialplanning/insuranceplanning/propertyinsurance", priority: 0.7 },
    // Excluded: /login, /register, /admin (no value for SEO)
  ].map(page => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "weekly",
  }));

  // Dynamic blog articles from GitHub
  let blogPages = [];
  try {
    const res = await fetch(
      "https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles",
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    blogPages = data
  .filter(item => item.name.endsWith(".html"))
  .map(item => ({
    url: `https://www.finworldltd.online/blog/${encodeURIComponent(item.name.replace(".html", ""))}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
  }

  return [...staticPages, ...blogPages];
}