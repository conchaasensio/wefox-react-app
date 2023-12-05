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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3d127a',
      light: '#cec0e0',
      dark: '#9d71dc',
    },
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/conchaasensio/">
        Concha Asensio
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <LocationOnIcon sx={{ mr: 2 }} />
            <Typography variant="h6" noWrap>
              wefox
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                wefox around the world
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                HQ in Berlin. We have offices in Paris, Zurich, Vaduz, Vienna and Milan; a TechHub in Barcelona and we
                are more than 1000 employees in the whole organization.
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Here some of our employees share informatio about the cities where they are living. Take a look ad feel
                free to add any kind of information or even add a new location.
              </Typography>
              <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" onClick={() => navigate('/create')}>
                  Create post
                </Button>
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
              Credits
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
              Made with 💜 for wefox 🦊
            </Typography>
            <Copyright />
          </Box>
        </footer>
      </ThemeProvider>
    </>
  );
}
