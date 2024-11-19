import React, { useState } from 'react';
import './AddPost.css';

function AddPost({ onAddPost }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content) {
      const newPost = {
        id: Math.random(),
        username: 'Current User',
        content: content,
      };
      onAddPost(newPost);
      setContent('');
    }
  };

  return (
    <div className="addPost">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default AddPost;
