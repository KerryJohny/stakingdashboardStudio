// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders staking-dashboard title', () => {
    render(<App />);
    const titleElement = screen.getByText(/staking-dashboard/i);
    expect(titleElement).toBeInTheDocument();
});
