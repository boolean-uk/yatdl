import { render, screen } from '@testing-library/react';
import Todo from './Todo';
import userEvent from '@testing-library/user-event'

test('when todo checkbox is checked then text has strikethrough', () => {
  render(<Todo text="another todo!"/>);
  userEvent.click(screen.getByRole('checkbox'))
  const todoElement = screen.getByText(/another todo!/i);
  
  expect(todoElement).toHaveStyle("text-decoration: line-through");
});
