import { render, screen } from '@testing-library/react';
import ShowPost from '../ShowPost';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

it('Should render the page', () => {
  const postData = {
    id: 1,
    title: 'Madrid',
    content: 'Madrid is the capital of Spain...',
    lat: '40.41678',
    long: '-3.70379',
    image_url: 'https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg',
  };
  render(
    <MemoryRouter initialEntries={['/show/1']}>
      <Routes>
        <Route path="/show/:id" element={<ShowPost posts={[postData]} />} />
      </Routes>
    </MemoryRouter>
  );
  const post = screen.getByText('Madrid');
  expect(post).toBeInTheDocument();
});
