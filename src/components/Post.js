import React from 'react';
import './Post.css';
import Post from './Post';
import AddPost from './AddPost';


function Post({ username, content }) {
  return (
    <div className="post">
      <h4>{username}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Post;
