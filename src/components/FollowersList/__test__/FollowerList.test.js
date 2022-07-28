import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';
import mockAxios from 'axios';

// jest.mock('../../../__mocks__/axios');
jest.mock('axios');

mockAxios.get.mockImplementation(() =>
  Promise.resolve({ data: { name: 'john' } })
);

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

// node_modules/react-scripts/scripts/utils/createJestConfig.js -> line 69, resetMocks: false
// was previously set to true

describe('FollowersList', () => {
  it('should fetch and render input element', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    console.log(followerDivElement);
    expect(followerDivElement).toBeInTheDocument();
  });
});

// describe('FollowersList', () => {
//   it('should fetch and render input element', async () => {
//     render(<MockFollowersList />);
//     const followerDivElement = await waitFor(() =>
//       screen.getByTestId('follower-item-0')
//     );
//     expect(followerDivElement).toBeInTheDocument();
//   });
// });

// describe('FollowersList', () => {
//   beforeEach(() => {
//     jest.mock('../../../__mocks__/axios');
//   });

//   it('should fetch and render input element', async () => {
//     render(<MockFollowersList />);
//     const followerDivElement = await screen.findByTestId(`follower-item-0`);
//     expect(followerDivElement).toBeInTheDocument();
//   });

//   it('should fetch and render input element (2nd)', async () => {
//     render(<MockFollowersList />);

//     const followerDivElement = await screen.findByTestId(`follower-item-0`);
//     screen.debug();
//     expect(followerDivElement).toBeInTheDocument();
//   });
// });
