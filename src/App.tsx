import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import axios from 'axios';
import PostData from './types.d.ts/PostData';
import ListPost from './components/ListPost';
import ShowPost from './components/ShowPost';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';

function App() {
  const [posts, setPosts] = useState<Array<PostData>>([]);

  const fetchPosts = () => {
    const response = axios
      .get('http://localhost:3000/api/v1/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
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
