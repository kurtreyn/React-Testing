import { render, screen } from '@testing-library/react';
import Header from '../Header';

// getByText
test('should render same text passed into title prop', async () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// getByRole (if the role was switched to something other than heading, it would fail the test) This also fails if there are multiple headers.
// it('this should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByRole('heading');
//   expect(headingElement).toBeInTheDocument();
// });

// when there is a second header, in this case, the second header is an h3 that holds the text "Cats"
// it('expected to render same text passed into title prop', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole('heading', { name: 'My Header' });
//   expect(headingElement).toBeInTheDocument();
// });

// this should test the h3 element which has a title of "Header"
// it('expect to render same text passed into title prop', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle('Header');
//   expect(headingElement).toBeInTheDocument();
// });

// this should test the h1 element with data-testid of "header-1"
// it('this should render same text passed into title prop', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId('header-1');
//   expect(headingElement).toBeInTheDocument();
// });

// findByText (use findBy when it needs to be async)
// test('test should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// queryBy use when you want to expect something to not be there
// test('this test should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// getAllByRole (use getAllBy when you need to test multiple elements)
// test('this test should render same text passed into title prop of element', async () => {
//   render(<Header title="My header" />);
//   const headingElements = screen.getAllByRole('heading');
//   expect(headingElements.length).toBe(2);
// });
