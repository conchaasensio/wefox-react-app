import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Props {
  posts: Array<{
    id: number;
    title: string;
    content: string;
    image_url: string;
  }>;
  onRemove: (id: number) => void;
}

export default function PropList({ posts, onRemove }: Props) {
  const navigate = useNavigate();

  const removePost = (id: number) => {
    axios.delete(`http://localhost:3000/api/v1/posts/${id}`).then((response) => {});
    onRemove(id);
  };

  const htmlCode = posts.map((post: any) => {
    return (
      <li key={post.id}>
        <p>{post.title}</p>
        <button onClick={() => removePost(post.id)}>Delete</button>
        <button onClick={() => navigate(`/detail/${post.id}`)}>More details</button>
        <button>Add post</button>
      </li>
    );
  });

  return (
    <div>
      <ul>{htmlCode}</ul>
    </div>
  );
}
