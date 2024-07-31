import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renders the main app and checks initial elements', () => {
  render(<App />);
  
  expect(screen.getByText(/Fruits & Vegetables Manipulation/i)).toBeInTheDocument();
  expect(screen.getByText(/Select a method to see how it manipulates the arrays./i)).toBeInTheDocument();
  expect(screen.getByText(/pop/i)).toBeInTheDocument();
  expect(screen.getByText(/shift/i)).toBeInTheDocument();
  expect(screen.getByText(/concat/i)).toBeInTheDocument();
  expect(screen.getByText(/reverse/i)).toBeInTheDocument();
  expect(screen.getByText(/splice/i)).toBeInTheDocument();
});

test('checks theme toggle functionality', () => {
  render(<App />);
  
  const themeToggleButton = screen.getByTestId('theme-toggle');
  
  fireEvent.click(themeToggleButton);
  expect(document.body.classList.contains('dark-mode')).toBe(true);
  
  fireEvent.click(themeToggleButton);
  expect(document.body.classList.contains('dark-mode')).toBe(false);
});
