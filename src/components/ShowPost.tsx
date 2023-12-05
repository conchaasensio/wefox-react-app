import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const GoBackButton = styled(Button)({
  backgroundColor: '#3d127a',
  '&:hover': {
    backgroundColor: '#9d71dc',
    boxShadow: 'none',
  },
});

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
      <Container sx={{ py: 8 }} maxWidth="md">
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardMedia component="div" sx={{ pt: '56.25%' }} image={post.image_url} />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography>{post.content}</Typography>
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
