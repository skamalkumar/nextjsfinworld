// pages/posts.js
'use client'
import React from 'react';
import { usePosts } from '../../../hooks/usePosts';

const PostsPage = () => {
  const { posts, loading } = usePosts();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="rounded-lg shadow-md p-4 bg-white">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
              <p className="text-sm text-gray-500">{new Date(post.createdAt.seconds * 1000).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default PostsPage;
