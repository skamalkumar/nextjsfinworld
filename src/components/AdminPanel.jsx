import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const AdminPanel = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editingPost, setEditingPost] = useState(null);

  // Fetch posts
  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const postsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Add new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        title: newPost.title,
        content: newPost.content,
        createdAt: new Date().toISOString()
      });
      setNewPost({ title: '', content: '' });
      fetchPosts();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  // Delete post
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'posts', id));
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Update post
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'posts', editingPost.id);
      await updateDoc(docRef, {
        title: editingPost.title,
        content: editingPost.content,
        updatedAt: new Date().toISOString()
      });
      setEditingPost(null);
      fetchPosts();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Content Management</h1>
      
      {/* Add New Post Form */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => setNewPost({...newPost, title: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <textarea
              placeholder="Content"
              value={newPost.content}
              onChange={(e) => setNewPost({...newPost, content: e.target.value})}
              className="w-full p-2 border rounded h-32"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Post
          </button>
        </form>
      </div>

      {/* Edit Post Form */}
      {editingPost && (
        <div className="mb-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <input
                type="text"
                value={editingPost.title}
                onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <textarea
                value={editingPost.content}
                onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                className="w-full p-2 border rounded h-32"
              />
            </div>
            <div className="flex space-x-2">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Update
              </button>
              <button
                type="button"
                onClick={() => setEditingPost(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="mt-2">{post.content}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => setEditingPost(post)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;