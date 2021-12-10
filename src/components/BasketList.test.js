import { render, screen } from '@testing-library/react';
import BasketList from './BasketList';

const mockData = [{catName: "Garfield", price: 200}]

describe("list tests", () => {
  test('renders the list', () => {
    render(<BasketList items={mockData} />);
    const element = screen.getByText(/Garfield/i);
    expect(element).toBeInTheDocument();
  });
})