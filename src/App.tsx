import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PostList from './components/PostList';

function App() {
  interface Post {
    id: number;
    title: string;
    content: string;
    image_url: string;
  }

  const [posts, setPosts] = useState<Array<Post>>([]);

  const fetchPosts = () => {
    const response = axios.get('http://localhost:3000/api/v1/posts').then((response) => {
      setPosts(response.data);
    });

    return response;
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <PostList posts={posts} />
    </div>
  );
}

export default App;
