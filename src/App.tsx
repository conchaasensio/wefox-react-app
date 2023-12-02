import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState<any>([]);

  const fetchPosts = () => {
    const response = axios.get('http://localhost:3000/api/v1/posts').then((response) => {
      setPosts(response.data);
    });

    return response;
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const htmlCode = posts.map((post: any) => {
    return (
      <li>
        <p>{post.title}</p>
        <p>{post.content}</p>
        <img src={post.image_url} alt={post.title} />
      </li>
    );
  });

  return (
    <div className="App">
      <ul>{htmlCode}</ul>
    </div>
  );
}

export default App;
