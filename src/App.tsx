import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import ListPost from './components/ListPost';
import ShowPost from './components/ShowPost';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';

interface Post {
  id: number;
  title: string;
  lat: string;
  long: string;
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
        <Route path="/" element={<ListPost posts={posts} onRemove={removePost} />} />
        <Route path="/show/:id" element={<ShowPost posts={posts} />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/update/:id" element={<UpdatePost posts={posts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
