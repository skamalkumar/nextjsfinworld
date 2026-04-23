/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.finworldltd.online',
  generateRobotsTxt: true,

  changefreq: 'daily',
  priority: 0.7,

  additionalPaths: async (config) => {
    try {
      const res = await fetch(
        'https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles?ref=main'
      );

      const data = await res.json();

      const blogPaths = data
        .filter((file) => file.name.endsWith('.html'))
        .map((file) => ({
          loc: `/blog/${file.name.replace('.html', '')}`,
          changefreq: 'daily',
          priority: 0.8,
        }));

      return blogPaths;
    } catch (err) {
      console.error("Sitemap error:", err);
      return [];
    }
  },
};