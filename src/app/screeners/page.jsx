// // app/page.js
// import { Octokit } from '@octokit/rest';
// import { FinancialArticleGenerator } from '../../../utils/FinancialArticleGenerator';
// import { createArticleFile, getLatestArticles } from '../../../lib/github';
// import { rateLimiter } from '../../../utils/rateLimit';

// const octokit = new Octokit({
//     auth: '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',
// });

// const REPO_OWNER = 'skamalkumar';
// const REPO_NAME = 'finworldarticles';
// const ARTICLE_PATH = 'content/articles'; // Ensure this matches the path in your repository
// const BRANCH = 'main'; // Update if your default branch is different

// export default async function Home() {
//   try {
//     const articles = await fetchLatestArticles(octokit, REPO_OWNER, REPO_NAME, ARTICLE_PATH, 3);

//     return (
//       <div className="min-h-screen bg-gray-50 py-8">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="flex justify-between items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold">Latest Financial Insights</h1>
//             </div>
//             <button
//               onClick={() => generateArticles(octokit, REPO_OWNER, REPO_NAME, ARTICLE_PATH)}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Generate New Articles
//             </button>
//           </div>

//           <div className="space-y-8">
//             {articles.map((article, index) => (
//               <article key={index} className="bg-white rounded-lg shadow-md p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-2xl font-semibold">{article.title}</h2>
//                   <span className="text-sm text-gray-500">
//                     {new Date(article.date).toLocaleDateString()}
//                   </span>
//                 </div>
                
//                 <div className="prose max-w-none">
//                   {article.content.split('\n\n').map((paragraph, pIndex) => (
//                     <p key={pIndex} className="mb-4 text-gray-600">
//                       {paragraph}
//                     </p>
//                   ))}
//                 </div>
                
//                 <div className="mt-4">
//                   <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
//                     {article.category}
//                   </span>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error in Home:', error);
//     return (
//       <div className="min-h-screen bg-gray-50 py-8">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="bg-red-100 text-red-700 p-4 rounded">
//             Error fetching articles. Please try again later.
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // Updated `fetchLatestArticles` function with logging and error handling
// async function fetchLatestArticles(octokit, repoOwner, repoName, articlePath, count) {
//   try {
//     console.log('Requesting content from:', repoOwner, repoName, articlePath);
//     const { data: contents } = await octokit.repos.getContent({
//       owner: repoOwner,
//       repo: repoName,
//       path: articlePath,
//       ref: BRANCH,
//     });

//     if (!contents || contents.length === 0) {
//       console.log('No content found at the specified path.');
//       return [];
//     }

//     console.log('Content retrieved successfully:', contents);

//     const articles = await Promise.all(
//       contents
//         .filter(file => file.type === 'file' && file.name.endsWith('.md'))
//         .sort((a, b) => b.name.localeCompare(a.name))
//         .slice(0, count)
//         .map(async file => {
//           const { data: content } = await octokit.repos.getContent({
//             owner: repoOwner,
//             repo: repoName,
//             path: file.path,
//             ref: BRANCH,
//           });

//           const fileContent = Buffer.from(content.content, 'base64').toString();
//           const [frontMatter, ...contentParts] = fileContent.split('---\n');
//           const metadata = parseFrontMatter(frontMatter);

//           return {
//             ...metadata,
//             content: contentParts.join('---\n').trim(),
//             fileName: file.name,
//           };
//         })
//     );

//     return articles;
//   } catch (error) {
//     console.error('Error fetching articles in fetchLatestArticles:', error);
//     throw error; // Re-throw for higher-level error handling
//   }
// }

// async function generateArticles(octokit, repoOwner, repoName, articlePath) {
//   try {
//     const generator = new FinancialArticleGenerator();
//     const categories = ['stock_market', 'investment', 'financial_planning'];

//     const results = await Promise.all(
//       categories.map(async (category) => {
//         const article = generator.generateArticle(category);
//         return createArticleFile(octokit, repoOwner, repoName, articlePath, article.title, article.content, category);
//       })
//     );

//     console.log('Articles generated successfully:', results);
//   } catch (error) {
//     console.error('Error generating articles:', error);
//   }
// }

// function parseFrontMatter(frontMatter) {
//   const metadata = {};
//   const lines = frontMatter.split('\n');
  
//   lines.forEach(line => {
//     const [key, ...values] = line.split(':');
//     if (key && values.length) {
//       metadata[key.trim()] = values.join(':').trim();
//     }
//   });
  
//   return metadata;
// }
