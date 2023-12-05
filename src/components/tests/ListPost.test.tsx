import { render, screen } from '@testing-library/react';

import ListPost from '../ListPost';
import { BrowserRouter } from 'react-router-dom';

it('Should render all the posts', () => {
  const posts = [
    {
      id: 1,
      title: 'Madrid',
      content: 'Madrid is the capital of Spain...',
      lat: '40.41678',
      long: '-3.70379',
      image_url: 'https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg',
    },
    {
      id: 2,
      title: 'Barcelona',
      content:
        'Barcelona is the capital and largest city of Catalonia with a population of 1.6 million within city limits.',
      lat: '41.3851',
      long: '2.1734',
      image_url:
        'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2017/05/17/15/barcelona-skyline.jpg',
      created_at: '2022-06-20T12:09:47.924Z',
      updated_at: '2022-06-20T12:09:47.924Z',
    },
  ];

  render(
    <BrowserRouter>
      <ListPost posts={posts} onRemove={() => {}} />
    </BrowserRouter>
  );

  const postImages = screen.getAllByRole('button', { name: 'View' });
  expect(postImages).toHaveLength(2);
});
