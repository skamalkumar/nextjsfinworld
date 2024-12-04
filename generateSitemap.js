const glob = require('glob');
const fs = require('fs');
const path = require('path');

// Function to get routes from the src/app directory
const getRoutes = () => {
  // Use glob to find all page.jsx files in src/app
  const files = glob.sync('src/app/**/*/page.jsx'); // Adjust file extension as needed

  console.log('Raw file paths:', files); // Debugging log

  return files.map((file) => {
    // Log the file being processed
    console.log('Processing file:', file);

    // Remove 'src/app' and file extension '.jsx' from the file path
    let route = file.replace('src/app', '').replace('/page.jsx', ''); 

    // Handle case for the root path, which should be '/'
    if (route === '/index') {
      route = '/';
    }

    // Replace backslashes with forward slashes (for Windows compatibility)
    route = route.replace(/\\/g, '/');

    // Log the modified route
    console.log('Modified route:', route);

    return route;
  });
};

// Generate sitemap based on the detected routes
const generateSitemap = () => {
  const routes = getRoutes();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => {
        // Concatenate the base URL with the sanitized route
        const loc = `https://finworldltd.online${route}`;
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

  // Write the generated sitemap to public/sitemap.xml
  fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

// Run the function to generate the sitemap
generateSitemap();
