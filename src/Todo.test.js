import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

it('renders without crashing', () => {
    render(<Todo id="1" task="Test Todo" removeTodo={() => { }} />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<Todo id="1" task="Test Todo" removeTodo={() => { }} />);
    expect(asFragment()).toMatchSnapshot();
});

it('should display the todo task', () => {
    render(<Todo id="1" task="Test Todo" removeTodo={() => { }} />)

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
})

it('calls removeTodo when X button is clicked', () => {
    const mockRemoveTodo = jest.fn();

    render(<Todo id="1" task="Test Todo" removeTodo={mockRemoveTodo} />)

    const removeButton = screen.getByText('X');

    fireEvent.click(removeButton);
    expect(mockRemoveTodo).toHaveBeenCalled();
})