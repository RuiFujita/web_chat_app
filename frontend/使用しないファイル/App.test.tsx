import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../削除済み/test_page';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
