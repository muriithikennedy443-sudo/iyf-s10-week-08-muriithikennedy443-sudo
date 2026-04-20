import { useState } from 'react';

function CreatePost({ onAddPost }) {
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    onAddPost({
      id: Date.now(),
      title: formData.title,
      excerpt: formData.content,
      author: "muriithikennedy443-sudo",
      date: new Date().toLocaleDateString(),
      likes: 0
    });
    setFormData({ title: '', content: '' });
  };

  return (
    <div className="create-post">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Post title" />
        <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Post content" />
        <button type="submit">Publish Post</button>
      </form>
    </div>
  );
}
export default CreatePost;