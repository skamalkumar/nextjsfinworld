'use client'
import { usePosts } from '../../../../hooks/usePosts';
import { slugify } from '../../../../utils/slugify';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const BlogPost = () => {
  const params = useParams();
  const { slug } = params;
  const { posts, loading } = usePosts();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (posts && slug) {
      const foundPost = posts.find((p) => slugify(p.title) === slug);
      setPost(foundPost);
    }
  }, [posts, slug]);

  if (loading) return (
    <div className="max-w-4xl mx-auto p-6">
      <p>Loading...</p>
    </div>
  );

  if (!slug || !posts) return null;

  if (!post) return (
    <div className="max-w-4xl mx-auto p-6">
      <p>Post not found</p>
      <Link href="/blog" className="text-blue-500 hover:underline mt-4 inline-block">
        Back to Blog
      </Link>
    </div>
  );

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.imageURL && (
        <img 
          src={post.imageURL} 
          alt={post.title} 
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />
      )}
      <div className="prose max-w-none text-gray-700">
        {post.content}
      </div>
      <div className="mt-8">
        <Link href="/blog" className="text-blue-500 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;