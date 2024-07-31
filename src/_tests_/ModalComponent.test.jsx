import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalComponent from '../components/ModalComponent';
import '@testing-library/jest-dom';

test('renders the modal component and checks content', () => {
  const content = {
    title: 'Array Method: pop',
    methodCode: 'array.pop()',
    explanation: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
    newFruits: ["apple", "orange", "watermelon"],
    newVegetables: ["carrot", "tomato", "pepper"],
    newFood: ["apple", "orange", "watermelon", "carrot", "tomato", "pepper"],
  };
  
  render(<ModalComponent isOpen={true} onRequestClose={() => {}} content={content} />);
  
  expect(screen.getByText(content.title)).toBeInTheDocument();
  expect(screen.getByText(content.explanation)).toBeInTheDocument();
  
  expect(screen.getByText((content, node) => {
    const hasText = (node) => node.textContent === 'Fruits: apple, orange, watermelon';
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );
    return nodeHasText && childrenDontHaveText;
  })).toBeInTheDocument();

  expect(screen.getByText((content, node) => {
    const hasText = (node) => node.textContent === 'Vegetables: carrot, tomato, pepper';
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );
    return nodeHasText && childrenDontHaveText;
  })).toBeInTheDocument();

  expect(screen.getByText((content, node) => {
    const hasText = (node) => node.textContent === 'Food: apple, orange, watermelon, carrot, tomato, pepper';
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );
    return nodeHasText && childrenDontHaveText;
  })).toBeInTheDocument();
});
