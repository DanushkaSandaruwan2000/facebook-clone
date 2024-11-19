import React, { useState } from 'react';
import Post from '../../Post';
import AddPost from '../../AddPost';
import './Feed.css';
import Post from 'components/Post';
import AddPost from 'components/AddPost';


function Feed() {
  const [posts, setPosts] = useState([
    { id: 1, username: 'John Doe', content: 'Hello World!' },
    { id: 2, username: 'Jane Smith', content: 'Loving React.js!' }
  ]);

  const addNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="feed">
      <AddPost onAddPost={addNewPost} />

      {posts.map((post) => (
        <Post key={post.id} username={post.username} content={post.content} />
      ))}
    </div>
  );
}

export default Feed;
