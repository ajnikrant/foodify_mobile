import React, { createElement } from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import MealCard from './MealCard';

const mockMeal = {
    name: "Test Meal",
    image: "someURL",
    price: 1, 
    description: "test desc",
    ingredients: "test ingredients"
  };

  const mockSearchEntry = "test"
  
  // **************** Test one ****************
test('Meal Card component matches snapshot', () => {
    const { asFragment } = render(<MealCard meal={mockMeal} allergenSearch={mockSearchEntry} />);

    expect(asFragment()).toMatchSnapshot();
});

// **************** Test two ****************
test('Card renders without crashing', () => {

    const div = document.createElement('div');

    render(
        <MealCard meal={mockMeal} allergenSearch={mockSearchEntry} />, div
    );
});

