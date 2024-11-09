'use client';
import { useState } from 'react';
import { usePosts } from "../../../hooks/usePosts";

const BlogPage = () => {
  const { posts, loading } = usePosts();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

const PostCard = ({ post }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      {post.imageURL && (
        <img
          src={post.imageURL}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600">
          {showFullContent ? post.content : `${post.content.substring(0, 100)}...`}
        </p>
        <button
          className="text-blue-500 font-semibold mt-4"
          onClick={() => setShowFullContent(!showFullContent)}
        >
          {showFullContent ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
