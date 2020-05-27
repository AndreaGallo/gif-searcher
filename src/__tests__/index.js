import React from 'react';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import App from '../App';

test('home works as expected', async () => {
  render(<App />)
  const searchInput = await screen.findByRole('textbox')
  expect(searchInput).toBeVisible()
});
