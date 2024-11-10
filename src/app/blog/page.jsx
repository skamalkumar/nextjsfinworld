'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles');
        const data = await response.json();
    
        if (Array.isArray(data)) {
          const postFiles = data.filter(item => item.name.endsWith('.html'));
    
          const postsData = await Promise.all(postFiles.map(async (post) => {
            const postResponse = await fetch(post.download_url);
            const postContent = await postResponse.text();
    
            // Construct potential image URLs with different extensions
            const baseImageName = post.name.replace('.html', '');
            const extensions = ['.webp', '.jpg', '.png'];
            let imageUrl = null;
    
            for (const ext of extensions) {
              const encodedImageFileName = encodeURIComponent(baseImageName + ext);
              const potentialUrl = `https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/content/images/${encodedImageFileName}`;
    
              try {
                const imageResponse = await fetch(potentialUrl);
                if (imageResponse.ok) { // If image is found, use this URL
                  imageUrl = potentialUrl;
                  break;
                }
              } catch (error) {
                console.error(`Error checking image at: ${potentialUrl}`, error);
              }
            }
    
            return {
              title: baseImageName,
              content: postContent,
              imageUrl,
            };
          }));
    
          setPosts(postsData);
        } else {
          console.error('Error: Data is not an array', data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };
   

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Head>
        <title>Our Blog - Your Website Name</title>
        <meta name="description" content="Read our latest blog posts on [your website's topic]." />
      </Head>
      <h1 className="text-3xl font-bold text-center mb-8">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
};

const PostCard = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
    {post.imageUrl && (
      <img src={post.imageUrl} alt={`${post.title} image`} className="w-full h-48 object-cover" />
    )}
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600">
        {post.content.substring(0, 100)}...
      </p>
      <Link 
        href={`/blog/${post.title}`}
        className="inline-block text-blue-500 font-semibold mt-4 hover:text-blue-600"
      >
        Read More
      </Link>
    </div>
  </div>
);

export default BlogPage;
