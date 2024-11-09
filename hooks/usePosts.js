'use client';
import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'skamalkumar';
const REPO_NAME = 'finworldarticles';
const BRANCH = 'main';

// Add your GitHub Personal Access Token here if the repository is private
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

// Utility function to check if image exists
const checkImageExists = async (url, headers) => {
  try {
    const response = await fetch(url, { 
      method: 'HEAD', 
      headers 
    });
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
    const verifyRepository = async () => {
      const repoUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}`;
      const response = await fetch(repoUrl, { headers: getHeaders() });
      
      if (!response.ok) {
        throw new Error(`Repository verification failed: ${response.status}. 
          Please check:
          1. Repository exists at ${repoUrl}
          2. Repository is public or token has correct permissions
          3. Repository name and username are correct`);
      }
      
      return await response.json();
    };

    const fetchPosts = async () => {
      try {
        // First verify repository access
        await verifyRepository();

        const articlesUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/content/articles?ref=${BRANCH}`;
        console.log('Fetching articles from:', articlesUrl);

        const articlesResponse = await fetch(articlesUrl, { headers: getHeaders() });
        
        if (!articlesResponse.ok) {
          throw new Error(`
            Failed to fetch articles directory. Status: ${articlesResponse.status}
            Please verify:
            1. The 'content/articles' directory exists in your repository
            2. The directory path is exactly 'content/articles' (case sensitive)
            3. The directory is not empty
            URL attempted: ${articlesUrl}
          `);
        }

        const articles = await articlesResponse.json();
        console.log('Articles found:', articles);

        if (!Array.isArray(articles)) {
          throw new Error(`Expected an array of articles but got: ${typeof articles}`);
        }

        const postsData = await Promise.all(
          articles
            .filter(article => article.name.endsWith('.md'))
            .map(async (article) => {
              try {
                if (!article.download_url) {
                  console.warn(`No download URL for ${article.name}`);
                  return null;
                }

                const contentResponse = await fetch(article.download_url, { 
                  headers: getHeaders() 
                });
                
                if (!contentResponse.ok) {
                  console.warn(`Failed to fetch content for ${article.name}`);
                  return null;
                }

                const content = await contentResponse.text();
                
                // Construct image URL for .webp format
                const imageName = article.name.replace('.md', '.webp');
                const imageURL = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/content/images/${encodeURIComponent(imageName)}`;

                // Verify if the image exists
                const imageExists = await checkImageExists(imageURL, getHeaders());
                
                return {
                  title: article.name.replace('.md', ''),
                  content,
                  imageURL: imageExists ? imageURL : null,
                  path: article.path,
                  sha: article.sha
                };
              } catch (error) {
                console.error(`Error processing article ${article.name}:`, error);
                return null;
              }
            })
        );

        setPosts(postsData.filter(Boolean));
      } catch (error) {
        console.error('Error in fetchPosts:', error);
        setError(error.message);
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