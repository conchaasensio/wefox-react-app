import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import ListPost from './components/ListPost';
import ShowPost from './components/ShowPost';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPost />} />
        <Route path="/show/:id" element={<ShowPost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/update/:id" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
