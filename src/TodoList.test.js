import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('should render without crashing', () => {
    render(<TodoList />)
})

it('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it('should add a new todo item', () => {
    render(<TodoList />)

    const input = screen.getByLabelText("New Todo:");
    const addButton = screen.getByText("Add Todo")

    fireEvent.change(input, { target: { value: "Test todo" } })
    fireEvent.click(addButton);

    expect(screen.getByText("Test todo")).toBeInTheDocument();

})

it('should remove a todo by its id', () => {
    render(<TodoList />)

    const input = screen.getByLabelText("New Todo:");
    const addButton = screen.getByText("Add Todo")

    fireEvent.change(input, { target: { value: "Test todo" } })
    fireEvent.click(addButton);

    expect(screen.getByText("Test todo")).toBeInTheDocument();

    const removeButton = screen.getByText('X');
    fireEvent.click(removeButton);

    expect(screen.queryByText("Test todo")).not.toBeInTheDocument();
})

it('does not add an empty todo', () => {
    render(<TodoList />)

    const addButton = screen.getByText('Add Todo');

    fireEvent.click(addButton);

    expect(screen.getByText('Task cannot be empty')).toBeInTheDocument();
    expect(screen.queryByText('X')).not.toBeInTheDocument();
})