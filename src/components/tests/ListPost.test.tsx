import { render } from '@testing-library/react';

import ListPost from '../ListPost';
import { BrowserRouter } from 'react-router-dom';

it('Should render the page', () => {
  render(
    <BrowserRouter>
      <ListPost posts={[]} onRemove={() => {}} />
    </BrowserRouter>
  );
});
