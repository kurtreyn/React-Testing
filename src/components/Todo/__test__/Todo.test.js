import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

// Integration Test

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (task) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  task.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  test('should render some an element when button is clicked', async () => {
    render(<MockTodo />);
    addTask(['Go grocery shopping']);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  test('should render multiple elements', async () => {
    render(<MockTodo />);
    addTask(['Go grocery shopping', 'Go to the gym', 'Stop alien invasion']);
    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  test('task should not have completed class when initially rendered', async () => {
    render(<MockTodo />);
    addTask(['Save the world']);
    const divElement = screen.getByText(/Save the world/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  test('task should have completed class when clicked', async () => {
    render(<MockTodo />);
    addTask(['Save the world']);
    const divElement = screen.getByText(/Save the world/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
