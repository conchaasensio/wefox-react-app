import axios from 'axios';

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
  const removePost = (id: number) => {
    axios.delete(`http://localhost:3000/api/v1/posts/${id}`).then((response) => {});
    onRemove(id);
  };

  const htmlCode = posts.map((post: any) => {
    return (
      <li key={post.id}>
        <p>{post.title}</p>
        <p>{post.content}</p>
        <img src={post.image_url} alt={post.title} />
        <button onClick={() => removePost(post.id)}>Borrar</button>
      </li>
    );
  });

  return (
    <div className="App">
      <ul>{htmlCode}</ul>
    </div>
  );
}
