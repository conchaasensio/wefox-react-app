import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Link,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface Props {
  posts: Array<{
    id: number;
    title: string;
    content: string;
    image_url: string;
  }>;
  onRemove: (id: number) => void;
}

export default function ListPost({ posts, onRemove }: Props) {
  const navigate = useNavigate();

  const removePost = (id: number) => {
    axios.delete(`http://localhost:3000/api/v1/posts/${id}`).then((response) => {});
    onRemove(id);
  };

  return (
    <>
      <ThemeProvider theme={createTheme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                Album layout
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc. Make it short and
                sweet, but not too short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" onClick={() => navigate('/create')}>
                  Create post
                </Button>
                <Button variant="outlined">Secondary action</Button>
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {posts &&
                posts.map((post) => (
                  <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia component="div" sx={{ pt: '56.25%' }} image={post.image_url} />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography>{post.content}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={() => navigate(`/show/${post.id}`)}>
                          View
                        </Button>
                        <Button size="small" onClick={() => navigate(`/update/${post.id}`)}>
                          Edit
                        </Button>
                        <Button size="small" onClick={() => removePost(post.id)}>
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </main>
        <footer>
          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
              Something here to put on footer
            </Typography>
            <Copyright />
          </Box>
        </footer>
      </ThemeProvider>
    </>
  );
}
