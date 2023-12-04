import axios from 'axios';
import { useState } from 'react';

interface FormState {
  title: string;
  content: string;
  lat: string;
  long: string;
  image_url: string;
}

const CreatePost = () => {
  const [inputValues, setInputValues] = useState<FormState>({
    title: '',
    content: '',
    lat: '',
    long: '',
    image_url: '',
  });
  const createPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/api/v1/posts', inputValues)
      .then((response) => (window.location.href = `/show/${response.data.id}`));
  };

  const updateInputValues = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={createPost}>
        <input onChange={updateInputValues} value={inputValues.title} type="text" name="title" placeholder="title" />
        <textarea onChange={updateInputValues} value={inputValues.content} name="content" placeholder="content" />
        <input onChange={updateInputValues} value={inputValues.lat} type="text" name="lat" placeholder="latitude" />
        <input onChange={updateInputValues} value={inputValues.long} type="text" name="long" placeholder="longitude" />
        <input onChange={updateInputValues} value={inputValues.image_url} name="image_url" placeholder="image" />
        <button>Create post</button>
      </form>
    </div>
  );
};

export default CreatePost;
