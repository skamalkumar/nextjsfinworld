'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';

const BlogPost = () => {
  const params = useParams();
  const { slug } = params;
  const [postContent, setPostContent] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch post content from GitHub
        const response = await fetch(
          `https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles/${slug}.html`
        );
        const postData = await response.json();

        if (postData.content) {
          // Decode HTML content from Base64 using TextDecoder for UTF-8
          const contentArray = Uint8Array.from(atob(postData.content), (c) => c.charCodeAt(0));
          const content = new TextDecoder("utf-8").decode(contentArray);
          console.log("Decoded HTML Content:", content); // Log for debugging
          setPostContent(content);
        } else {
          console.error("Unexpected response format:", postData);
        }

        // Check for an image with different extensions
        const extensions = ['.webp', '.jpg', '.png'];
        for (const ext of extensions) {
          const formattedSlug = decodeURIComponent(slug);
          const potentialUrl = `https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/content/images/${formattedSlug}${ext}`;

          const imageResponse = await fetch(potentialUrl);
          if (imageResponse.ok) {
            setImageUrl(potentialUrl);
            break;
          }
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) return <p>Loading...</p>;

  if (!slug || !postContent) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p>Post not found</p>
        <Link href="/blog" className="text-blue-500 hover:underline mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto p-6">
      <Head>
        <title>{decodeURIComponent(slug)} - Your Website Name</title>
        <meta name="description" content={`Read more about ${decodeURIComponent(slug)}.`} />
      </Head>
      
      <header>
        <h1 className="text-3xl font-bold mb-4">{decodeURIComponent(slug)}</h1>
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={decodeURIComponent(slug)} 
            className="mb-4 mx-auto w-full max-w-md h-auto rounded-md shadow-sm" 
          />
        )}
      </header>

      <section className="prose max-w-none text-gray-700">
        {/* Render HTML content with dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: postContent }} />
      </section>
      
      <footer className="mt-8">
        <Link href="/blog" className="text-blue-500 hover:underline">
          ← Back to Blog
        </Link>
      </footer>
    </article>
  );
};

export default BlogPost;
