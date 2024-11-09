'use client'
import { usePosts } from "../../../hooks/usePosts";

const BlogPage = () => {
  const { posts, loading } = usePosts();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {posts.map((post) => (
        <div key={post.title} className="mb-8 p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          {post.imageURL && <img src={post.imageURL} alt={post.title} className="mb-4 w-full h-auto" />}
          <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

