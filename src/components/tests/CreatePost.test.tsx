import { render, screen } from '@testing-library/react';

import CreatePost from '../CreatePost';

it('Should render the page', () => {
  render(<CreatePost />);

  const createPostButton = screen.queryByRole('button', { name: 'Create Post' });
  expect(createPostButton).toBeInTheDocument();
});
