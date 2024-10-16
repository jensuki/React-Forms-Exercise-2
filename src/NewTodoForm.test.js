import { render, screen, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('should render without crashing', () => {
    render(<NewTodoForm addTodo={() => { }} />)
})

it('matches snapshot', () => {
    const { asFragment } = render(<NewTodoForm addTodo={() => { }} />);
    expect(asFragment()).toMatchSnapshot();
})

it('updates input field when typing', () => {
    render(<NewTodoForm addTodo={() => { }} />)

    const input = screen.getByLabelText('New Todo:');

    fireEvent.change(input, { target: { value: 'Test todo' } });

    expect(input.value).toBe("Test todo");
})