import { Avatar, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      {posts &&
        posts.map((post: any) => {
          return (
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={post.image_url} alt={post.title} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={post.title} />
                <IconButton aria-label="delete">
                  <DeleteIcon onClick={() => removePost(post.id)} />
                </IconButton>
                <IconButton aria-label="read more">
                  <ReadMoreIcon onClick={() => navigate(`/show/${post.id}`)} />
                </IconButton>
              </ListItem>
            </List>
          );
        })}
      <Button variant="contained" onClick={() => navigate('/create')}>
        Create post
      </Button>
    </>
  );
}
