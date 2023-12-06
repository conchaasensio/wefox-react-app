import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../config';
import axios from 'axios';
import PostData from '../types.d.ts/PostData';

const GoBackButton = styled(Button)({
  backgroundColor: '#3d127a',
  '&:hover': {
    backgroundColor: '#9d71dc',
    boxShadow: 'none',
  },
});

export default function ShowPost() {
  const [post, setPost] = useState<PostData | undefined>(undefined);

  const { id } = useParams();
  const navigate = useNavigate();
  const loadPost = () => {
    axios
      .get(`${API_ENDPOINT}/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        alert(error);
      });
  };
  useEffect(() => {
    loadPost();
  }, []);
  if (id === undefined) {
    return <p>You need to specify an id</p>;
  }

  if (post === undefined) {
    return <p>The post does not exist</p>;
  }
  const mapUrl = `https://maps.google.com/maps?q=${post.lat},${post.long}&hl=es&z=4&output=embed`;
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <CardMedia
            component="div"
            sx={{ pt: '56.25%' }}
            image={post.image_url || 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography>{post.content}</Typography>
            <iframe title="Map" src={mapUrl}></iframe>
          </CardContent>
          <CardActions>
            <GoBackButton variant="contained" size="small" onClick={() => navigate('/')}>
              Go Back
            </GoBackButton>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
