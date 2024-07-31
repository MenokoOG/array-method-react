import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import FruitList from './components/FruitList';
import VegetableList from './components/VegetableList';
import ModalComponent from './components/ModalComponent';
import ActionButton from './components/ActionButton';
import MainContainer from './components/MainContainer';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background: ${(props) =>
      props.theme.mode === 'dark'
        ? 'linear-gradient(135deg, #240090, #000000)'
        : 'linear-gradient(135deg, #ffafcc, #ff5d8f)'};
    color: ${(props) => (props.theme.mode === 'dark' ? '#dfe6e9' : '#2d3436')};
    transition: background 0.5s ease, color 0.5s ease;
  }
`;

const methodData = {
  pop: {
    methodCode: 'array.pop()',
    explanation: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
  },
  shift: {
    methodCode: 'array.shift()',
    explanation: 'The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.',
  },
  concat: {
    methodCode: 'array1.concat(array2)',
    explanation: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
  },
  reverse: {
    methodCode: 'array.reverse()',
    explanation: 'The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.',
  },
  splice: {
    methodCode: 'array.splice(start, deleteCount, item1, item2, ...)',
    explanation: 'The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.',
  },
};

const App = () => {
  const [fruit, setFruit] = useState(["banana", "apple", "orange", "watermelon"]);
  const [vegetables, setVegetables] = useState(["carrot", "tomato", "pepper", "lettuce"]);
  const [food, setFood] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [theme, setTheme] = useState({ mode: 'light' });

  const handleMethodClick = (method) => {
    let newFruit = [...fruit];
    let newVegetables = [...vegetables];
    let combinedFood = [...food];
    let message;

    switch (method) {
      case 'pop':
        newVegetables.pop();
        message = "Removed the last item from the vegetables array.";
        setVegetables(newVegetables);
        break;
      case 'shift':
        newFruit.shift();
        message = "Removed the first item from the fruit array.";
        setFruit(newFruit);
        break;
      case 'concat':
        combinedFood = newFruit.concat(newVegetables);
        message = "Concatenated the fruit and vegetable arrays.";
        setFood(combinedFood);
        break;
      case 'reverse':
        combinedFood.reverse();
        message = "Reversed the combined food array.";
        setFood(combinedFood);
        break;
      case 'splice':
        combinedFood.splice(4, 2);
        message = "Removed elements at index 4 from the combined food array.";
        setFood(combinedFood);
        break;
      default:
        message = "Unknown method";
    }

    setModalContent({ 
      title: `Array Method: ${method}`,
      methodCode: methodData[method].methodCode,
      explanation: methodData[method].explanation,
      newFruits: newFruit,
      newVegetables: newVegetables,
      newFood: combinedFood
    });
    setModalIsOpen(true);
    toast.info(message);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prev) => ({
      mode: prev.mode === 'dark' ? 'light' : 'dark'
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <div className="flex justify-between w-full px-4">
          <h1 className="text-4xl font-bold mb-4">Fruits & Vegetables Manipulation</h1>
          <button onClick={toggleTheme} className="text-2xl">
            {theme.mode === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <p className="mb-4 text-center text-lg">
          Select a method to see how it manipulates the arrays. The results will be displayed below.
          <br />
          Drag the cards for fun!
        </p>
        <div className="flex space-x-4 mb-4">
          <FruitList fruits={fruit} />
          <VegetableList vegetables={vegetables} />
        </div>
        <div className="flex flex-wrap space-x-2 mb-4 justify-center">
          {['pop', 'shift', 'concat', 'reverse', 'splice'].map((method) => (
            <ActionButton key={method} onClick={() => handleMethodClick(method)} method={method} />
          ))}
        </div>
        <ModalComponent
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          content={modalContent}
        />
        <ToastContainer />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
