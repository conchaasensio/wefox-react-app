import React from 'react';

interface Props {
  posts: Array<{
    id: number;
    title: string;
    content: string;
    image_url: string;
  }>;
}

export default function PropList({ posts }: Props) {
  const htmlCode = posts.map((post: any) => {
    return (
      <li key={post.id}>
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
