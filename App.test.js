import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';

test('kuvantaa sivulle tekstin hungry baby yoda', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/hungry baby yoda/i); 
  expect(headerElement).toBeInTheDocument();
});
