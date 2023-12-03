import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Form from './components/Form';

interface Post {
  id: number;
  title: string;
  content: string;
  image_url: string;
}

function App() {
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

  const removePost = (id: number) => {
    setPosts(
      posts.filter((post: any) => {
        return post.id !== id;
      })
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList posts={posts} onRemove={removePost} />} />
        <Route path="/detail/:id" element={<PostDetail posts={posts} />} />
      </Routes>
      <Form />
    </BrowserRouter>
  );
}

export default App;
