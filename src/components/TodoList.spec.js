import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import userEvent from '@testing-library/user-event'

test('renders a heading', () => {
  render(<TodoList />);
  const headingElement = screen.getByText(/Yet Another Todo List!/i);
  expect(headingElement).toBeInTheDocument();
});

test('save and show a todo!', () => {
  render(<TodoList />);
  userEvent.type(screen.getByRole('textbox'), "My first todo!")
  userEvent.click(screen.getByRole('button'))
  const todoElement = screen.getByText(/My first todo!/i);
  expect(todoElement).toBeInTheDocument();
});

test('clear todos', () => {
  render(<TodoList />);
  userEvent.type(screen.getByRole('textbox'), "My first todo!")
  userEvent.click(screen.getByRole('button'))

  const todoElement = screen.getByText(/My first todo!/i);
  expect(todoElement).toBeInTheDocument();

  userEvent.click(screen.getByRole('link'))

  expect(todoElement).not.toBeInTheDocument()
});
