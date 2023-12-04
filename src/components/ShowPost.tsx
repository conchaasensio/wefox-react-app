import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface Props {
  posts: Array<{
    id: number;
    title: string;
    lat: string;
    long: string;
    content: string;
    image_url: string;
  }>;
}

export default function ShowPost({ posts }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  if (id === undefined) {
    return <p>You need to specify an id</p>;
  }

  const post = posts.find((post) => post.id === parseInt(id));
  if (post === undefined) {
    return <p>The post does not exist</p>;
  }

  return (
    <>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{post.lat}</p>
      <p>{post.long}</p>
      <img src={post.image_url} alt={post.title} />
      <button onClick={() => navigate(`/update/${post.id}`)}>Update post</button>
    </>
  );
}
