'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';

const BlogPost = () => {
  const params = useParams();
  const { slug } = params;
  const [postContent, setPostContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles/${slug}.html`);
        const postData = await response.json();
        const text = await fetch(postData.download_url).then(res => res.text()); // Get HTML content
        setPostContent(text);
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

  if (!slug || !postContent) return (
    <div className="max-w-4xl mx-auto p-6">
      <p>Post not found</p>
      <Link href="/blog" className="text-blue-500 hover:underline mt-4 inline-block">
        Back to Blog
      </Link>
    </div>
  );

  return (
    <article className="max-w-4xl mx-auto p-6">
      <Head>
        <title>{slug} - Your Website Name</title>
        <meta name="description" content={slug} />
      </Head>
      <h1 className="text-3xl font-bold mb-4">{slug}</h1>
      <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: postContent }} />
      <div className="mt-8">
        <Link href="/blog" className="text-blue-500 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
