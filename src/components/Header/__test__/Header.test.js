import { render, screen } from '@testing-library/react';
import Header from '../Header';

// getByText
// test('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// getByRole (if the role was switched to something other than heading, it would fail the test) This also fails if there are multiple headers.
// it('this should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByRole('heading');
//   expect(headingElement).toBeInTheDocument();
// });

// when there is a second header, in this case, the second header is an h3 that holds the text "Cats"
it('expected to render same text passed into title prop', async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole('heading', { name: 'My Header' });
  expect(headingElement).toBeInTheDocument();
});
