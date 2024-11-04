// pages/blog.js or any other page
import { usePosts } from '../hooks/usePosts';

export default function BlogPage() {
  const { posts, loading } = usePosts();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}