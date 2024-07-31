import React from 'react';
import { render, screen } from '@testing-library/react';
import VegetableList from '../components/VegetableList';
import '@testing-library/jest-dom';

test('renders the vegetable list and checks items', () => {
  const vegetables = ["carrot", "tomato", "pepper", "lettuce"];
  render(<VegetableList vegetables={vegetables} />);
  
  expect(screen.getByText(/Vegetables/i)).toBeInTheDocument();
  vegetables.forEach(vegetable => {
    expect(screen.getByText(vegetable)).toBeInTheDocument();
  });
});
