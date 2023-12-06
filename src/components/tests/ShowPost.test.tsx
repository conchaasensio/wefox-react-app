import { render, screen } from '@testing-library/react';
import ShowPost from '../ShowPost';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('Should render the page', async () => {
  mockedAxios.get.mockResolvedValue({
    data: {
      id: 1,
      title: 'Madrid',
      content:
        'Madrid is the capital of Spain and the largest municipality in both the Community of Madrid and Spain as a whole. It is beautiful.',
      lat: '40.41678',
      long: '-3.70379',
      image_url: 'https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg',
      created_at: '2022-06-20T12:09:47.921Z',
      updated_at: '2023-12-06T07:29:28.872Z',
    },
  });
  render(
    <MemoryRouter initialEntries={['/show/1']}>
      <Routes>
        <Route path="/show/:id" element={<ShowPost />} />
      </Routes>
    </MemoryRouter>
  );
  const post = await screen.findByText('Madrid');
  expect(post).toBeInTheDocument();
});
