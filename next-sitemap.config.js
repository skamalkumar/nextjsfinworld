/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://finworldltd.online',
  generateRobotsTxt: true,

  changefreq: 'daily',
  priority: 0.7,

  exclude: ['/404'],

  additionalPaths: async (config) => {
    const res = await fetch(
      'https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles'
    );

    const data = await res.json();

    const blogPaths = data.map((file) => ({
      loc: `/blog/${file.name.replace('.html', '')}`,
      changefreq: 'daily',
      priority: 0.8,
    }));

    return [
      ...blogPaths,
    ];
  },
};