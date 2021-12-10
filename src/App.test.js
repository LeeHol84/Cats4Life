import { render, screen } from '@testing-library/react';
import App from './App';


describe("app tests", () => {
  test('renders the heading', () => {
    render(<App />);
    const element = screen.getByText(/Welcome to Ye Olde Catte Shoppe/i);
    expect(element).toBeInTheDocument();
  });
})
