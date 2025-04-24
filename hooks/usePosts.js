'use client';
import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'skamalkumar';
const REPO_NAME = 'finworldarticles';
const BRANCH = 'main';

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';

const getHeaders = () => {
  const headers = {
    'Accept': 'application/vnd.github.v3+json'
  };
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
  }
  return headers;
};

const checkImageExists = async (url, headers) => {
  try {
    const response = await fetch(url, { method: 'HEAD', headers });
    return response.ok;
  } catch (error) {
    console.error('Error checking image:', error);
    return false;
  }
};

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const articlesUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/content/articles?ref=${BRANCH}`;
        const articlesResponse = await fetch(articlesUrl, { headers: getHeaders() });

        if (!articlesResponse.ok) {
          throw new Error(`Failed to fetch articles. Status: ${articlesResponse.status}`);
        }

        const articles = await articlesResponse.json();
        console.log('Fetched articles:', articles);

        const postsData = await Promise.all(
          articles
            .filter((article) => {
              const isMarkdown = article.name.endsWith('.md');
              console.log(`Checking article ${article.name} - Is Markdown: ${isMarkdown}`);
              return isMarkdown;
            })
            .map(async (article) => {
              console.log(`Processing article: ${article.name}`);
              
              if (!article.download_url) {
                console.warn(`Skipping article ${article.name}: No download URL.`);
                return null;
              }

              try {
                const contentResponse = await fetch(article.download_url, { headers: getHeaders() });
                if (!contentResponse.ok) {
                  console.warn(`Skipping article ${article.name}: Failed to fetch content.`);
                  return null;
                }
                const content = await contentResponse.text();
                console.log(`Content fetched for ${article.name}`);

                const imageName = article.name.replace('.md', '');
                const webpImageURL = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/content/images/${encodeURIComponent(imageName)}.webp`;
                const jpgImageURL = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/content/images/${encodeURIComponent(imageName)}.jpg`;
                const jpegImageURL = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/content/images/${encodeURIComponent(imageName)}.jpeg`;

                const imageURL = await checkImageExists(webpImageURL, getHeaders()) ? webpImageURL :
                                  await checkImageExists(jpgImageURL, getHeaders()) ? jpgImageURL : null;
                                  await checkImageExists(jpegImageURL, getHeaders()) ? jpegImageURL : null;

                if (!imageURL) {
                  console.warn(`No image found for ${article.name}`);
                } else {
                  console.log(`Image found for ${article.name}: ${imageURL}`);
                }

                return {
                  id: article.sha,
                  title: article.name.replace('.md', ''),
                  content,
                  imageURL,
                };
              } catch (innerError) {
                console.error(`Error processing article ${article.name}:`, innerError);
                return null;
              }
            })
        );

        const validPosts = postsData.filter(Boolean);
        console.log('Posts set in state:', validPosts); // Final check on valid posts
        setPosts(validPosts);
      } catch (outerError) {
        console.error('Error fetching posts:', outerError);
        setError(outerError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};




// hooks/usePosts.js
// 'use client'
// import { useState, useEffect } from 'react';
// import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// import { db } from '../firebase/firebase';

// export const usePosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
//         const querySnapshot = await getDocs(q);
//         const postsData = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setPosts(postsData);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return { posts, loading };
// };