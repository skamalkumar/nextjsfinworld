const glob = require('glob');
const fs = require('fs');
const path = require('path');

// Function to get routes from the src/app directory
const getRoutes = () => {
  // Use glob to find all page.jsx files in src/app
  const files = glob.sync('src/app/**/page.jsx');

  return files
    .map((file) => {
      // Normalize file path separators
      const normalizedPath = file.replace(/\\/g, '/'); 

      // Remove 'src/app' prefix and '/page.jsx' suffix
      let route = normalizedPath
        .replace(/^src\/app/, '') // Remove src/app prefix
        .replace(/\/page\.jsx$/, ''); // Remove /page.jsx suffix

      // Handle root route
      if (route === '' || route === '/index') {
        return '/';
      }

      // Ensure route starts with a forward slash
      return `/${route.replace(/^\/+/, '')}`;
    })
    .filter(route => route); // Remove any null or undefined routes
};

// Generate sitemap based on the detected routes
const generateSitemap = () => {
  const routes = getRoutes();

  console.log('Generated Routes:', routes); // Debug log to see actual routes

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => {
        const loc = `https://www.finworldltd.online${route}`;
        return `
        <url>
          <loc>${loc}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
        `;
      })
      .join('')}
  </urlset>`;

  // Ensure public directory exists
  const publicDir = path.join('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Write the generated sitemap to public/sitemap.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

// Run the function to generate the sitemap
generateSitemap();
