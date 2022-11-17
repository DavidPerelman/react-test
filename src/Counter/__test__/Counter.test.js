import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
  const component = render(<Counter />);
  const headerElement = component.getByTestId('header');

  expect(headerElement.textContent).toBe('My Counter');
});

test('counter initally start with text of 0', () => {
  const component = render(<Counter />);
  const counterElement = component.getByTestId('counter');

  expect(counterElement.textContent).toBe('0');
});

test('input contain inital value of 1', () => {
  const component = render(<Counter />);
  const inputElement = component.getByTestId('input');

  expect(inputElement.value).toBe('1');
});

test('add button renders with +', () => {
  const component = render(<Counter />);
  const addBtnElement = component.getByTestId('add-btn');

  expect(addBtnElement.textContent).toBe('+');
});

test('subtract button renders with -', () => {
  const component = render(<Counter />);
  const subtractBtnElement = component.getByTestId('subtract-btn');

  expect(subtractBtnElement.textContent).toBe('-');
});

test('change value of input work correctly', () => {
  const component = render(<Counter />);
  const inputElement = component.getByTestId('input');

  fireEvent.change(inputElement, {
    target: {
      value: '5',
    },
  });

  expect(inputElement.value).toBe('5');
});
