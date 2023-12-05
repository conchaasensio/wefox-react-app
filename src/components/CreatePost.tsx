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
      .then((response) => (window.location.href = `/show/${response.data.id}`))
      .catch(function (error) {
        alert(error);
      });
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
        <label htmlFor="name">City name</label>
        <input onChange={updateInputValues} value={inputValues.title} type="text" name="title" placeholder="title" />
        <label htmlFor="content">Content</label>
        <textarea onChange={updateInputValues} value={inputValues.content} name="content" placeholder="content" />
        <label htmlFor="image">Image</label>
        <input onChange={updateInputValues} value={inputValues.image_url} name="image_url" placeholder="image" />
        <label htmlFor="latlong">Coordinates</label>
        <input onChange={updateInputValues} value={inputValues.lat} type="text" name="lat" placeholder="latitude" />
        <input onChange={updateInputValues} value={inputValues.long} type="text" name="long" placeholder="longitude" />
        <button>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
