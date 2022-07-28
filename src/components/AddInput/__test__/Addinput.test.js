import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

// Fire Event
const mockedSetTodos = jest.fn();

describe('AddInput', () => {
  test('should render the the input element', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test('should be able to type into input', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: 'Go to the store' } });
    expect(inputElement.value).toBe('Go to the store');
  });

  test('should have empty input when add button is cliked', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: 'Go Grocery Shopping' },
    });
    const buttonElement = screen.getByRole('button', { name: /Add/i });

    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });
});
