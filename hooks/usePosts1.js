'use client'
import { useState, useEffect } from 'react';

const fetchGitHubFile = async (path) => {
  const response = await fetch(`https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/${path}`);
  if (response.ok) {
    return await response.text(); // For Markdown files, or JSON.parse(await response.text()) for JSON if articles are JSON
  } else {
    console.error(`Failed to fetch file at ${path}:`, response.status);
    return null;
  }
};

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const articlesResponse = await fetch(`https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles`);
        const articles = await articlesResponse.json();

        const postsData = await Promise.all(
          articles.map(async (article) => {
            const content = await fetchGitHubFile(`content/articles/${article.name}`);
            const imageName = article.name.replace('.md', '.png'); // Assuming .md articles have corresponding .png images
            const imageURL = `https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/content/images/${imageName}`;

            return { title: article.name.replace('.md', ''), content, imageURL };
          })
        );

        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading };
};
