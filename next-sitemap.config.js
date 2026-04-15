module.exports = {
  siteUrl: 'https://finworldltd.online',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404'],
  transform: async (config, path) => {
    if (path === '/dynamic-route') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
      };
    }
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
    };
  },
  additionalPaths: async (config) => [
    { loc: '/custom-page', changefreq: 'daily', priority: 0.8 },
  ],
};
