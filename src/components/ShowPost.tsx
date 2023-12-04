import { useParams } from 'react-router-dom';

interface Props {
  posts: Array<{
    id: number;
    title: string;
    content: string;
    image_url: string;
  }>;
}

export default function ShowPost({ posts }: Props) {
  const { id } = useParams();
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
      <img src={post.image_url} alt={post.title} />
    </>
  );
}
