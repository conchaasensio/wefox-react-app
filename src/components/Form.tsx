import axios from 'axios';
import { useState } from 'react';

interface FormState {
  title: string;
  content: string;
  lat: string;
  long: string;
  image_url: string;
}

const Form = () => {
  const [inputValues, setInputValues] = useState<FormState>({
    title: '',
    content: '',
    lat: '',
    long: '',
    image_url: '',
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/v1/posts', inputValues).then((response) => {});
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.title} type="text" name="title" placeholder="title" />
        <textarea onChange={handleChange} value={inputValues.content} name="content" placeholder="content" />
        <input onChange={handleChange} value={inputValues.image_url} name="image_url" placeholder="image" />
        <button>Save new post</button>
      </form>
    </div>
  );
};

export default Form;
