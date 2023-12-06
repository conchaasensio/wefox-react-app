import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_ENDPOINT } from '../config';
import PostData from '../types.d.ts/PostData';

interface InitialState {
  title: string;
  content: string;
  lat: string;
  long: string;
  image_url: string;
}

function UpdatePost() {
  const { id } = useParams();

  const [inputValues, setInputValues] = useState<InitialState>({
    title: '',
    content: '',
    lat: '',
    long: '',
    image_url: '',
  });

  const loadPost = () => {
    axios
      .get(`${API_ENDPOINT}/${id}`)
      .then((response) => {
        setInputValues(response.data);
      })
      .catch(function (error) {
        alert(error);
      });
  };
  useEffect(() => {
    loadPost();
  }, []);

  const updatePost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .put(`${API_ENDPOINT}/${id}`, inputValues)
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

  if (id === undefined) {
    return <p>You need to specify an id</p>;
  }

  return (
    <div>
      <form onSubmit={updatePost}>
        <input onChange={updateInputValues} value={inputValues.title} type="text" name="title" placeholder="title" />
        <textarea onChange={updateInputValues} value={inputValues.content} name="content" placeholder="content" />
        <input
          onChange={updateInputValues}
          value={inputValues.lat}
          type="text"
          name="latitude"
          placeholder="latitude"
        />
        <input
          onChange={updateInputValues}
          value={inputValues.long}
          type="text"
          name="longitude"
          placeholder="longitude"
        />
        <input onChange={updateInputValues} value={inputValues.image_url} name="image_url" placeholder="image" />
        <button>Save changes</button>
      </form>
    </div>
  );
}

export default UpdatePost;
