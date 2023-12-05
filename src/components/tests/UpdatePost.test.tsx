import { render, screen } from '@testing-library/react';
import UpdatePost from '../UpdatePost';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

it('Should render the page', () => {
  render(
    <MemoryRouter initialEntries={['/update/1']}>
      <Routes>
        <Route
          path="/update/:id"
          element={
            <UpdatePost
              posts={[
                {
                  id: 1,
                  title: 'Madrid',
                  content: 'Madrid is the capital of Spain...',
                  lat: '40.41678',
                  long: '-3.70379',
                  image_url: 'https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg',
                },
              ]}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );
  const post = screen.getByDisplayValue('Madrid');
  expect(post).toBeInTheDocument();
});
