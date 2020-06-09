import React from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './components/Post'

const posts = [
  {
    likes: 20,
    description: "The changed description",
    image: {
      url: "/uploads/Squash_750bdf0469.jpeg"
    }
  },
  {
    likes: 33,
    description: "The second post",
    image: {
      url: "/uploads/Squash_750bdf0469.jpeg"
    }
  }
]

function App() {
  return (
    <div className="App">
      {posts.map(post => (
        <Post 
          likes={post.likes}
          description={post.description}
          url={post.image && post.image.url}
        />
      ))}
    </div>
  );
}

export default App;
