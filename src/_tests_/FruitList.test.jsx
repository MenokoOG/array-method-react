import React from 'react';
import { render, screen } from '@testing-library/react';
import FruitList from '../components/FruitList';
import '@testing-library/jest-dom';

test('renders the fruit list and checks items', () => {
  const fruits = ["banana", "apple", "orange", "watermelon"];
  render(<FruitList fruits={fruits} />);
  
  expect(screen.getByText(/Fruits/i)).toBeInTheDocument();
  fruits.forEach(fruit => {
    expect(screen.getByText(fruit)).toBeInTheDocument();
  });
});
