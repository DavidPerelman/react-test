import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

test('header renders with correct text', () => {
  const headerElement = getByTestId('header');

  expect(headerElement.textContent).toBe('My Counter');
});

test('counter initally start with text of 0', () => {
  const counterElement = getByTestId('counter');

  expect(counterElement.textContent).toBe('0');
});

test('input contain inital value of 1', () => {
  const inputElement = getByTestId('input');

  expect(inputElement.value).toBe('1');
});

test('add button renders with +', () => {
  const addBtnElement = getByTestId('add-btn');

  expect(addBtnElement.textContent).toBe('+');
});

test('subtract button renders with -', () => {
  const subtractBtnElement = getByTestId('subtract-btn');

  expect(subtractBtnElement.textContent).toBe('-');
});

test('change value of input work correctly', () => {
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: {
      value: '5',
    },
  });

  expect(inputElement.value).toBe('5');
});

test('click on plus btn add 1 to counter', () => {
  const addBtnElement = getByTestId('add-btn');
  const counterElement = getByTestId('counter');

  expect(counterElement.textContent).toBe('0');

  fireEvent.click(addBtnElement);

  expect(counterElement.textContent).toBe('1');
});

test('click on subtract btn subtract 1 from counter', () => {
  const subtractBtnElement = getByTestId('subtract-btn');
  const counterElement = getByTestId('counter');

  expect(counterElement.textContent).toBe('0');

  fireEvent.click(subtractBtnElement);

  expect(counterElement.textContent).toBe('-1');
});

test('changing input value then clicking on add btn works correctly', () => {
  const addBtnElement = getByTestId('add-btn');
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: {
      value: '5',
    },
  });

  fireEvent.click(addBtnElement);

  expect(counterElement.textContent).toBe('5');
});

test('changing input value then clicking on subtract btn works correctly', () => {
  const subtractBtnElement = getByTestId('subtract-btn');
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: {
      value: '5',
    },
  });

  fireEvent.click(subtractBtnElement);

  expect(counterElement.textContent).toBe('-5');
});

test('adding and then subtracting leads to the correct counter number', () => {
  const addBtnElement = getByTestId('add-btn');
  const subtractBtnElement = getByTestId('subtract-btn');
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');

  fireEvent.change(inputElement, {
    target: {
      value: '10',
    },
  });

  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);

  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);

  expect(counterElement.textContent).toBe('20');

  fireEvent.change(inputElement, {
    target: {
      value: '5',
    },
  });

  fireEvent.click(addBtnElement);

  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);

  expect(counterElement.textContent).toBe('15');
});

test('counter contains correct className', () => {
  const counterElement = getByTestId('counter');
  const inputElement = getByTestId('input');
  const addBtnElement = getByTestId('add-btn');
  const subtractBtnElement = getByTestId('subtract-btn');

  expect(counterElement.className).toBe('');

  fireEvent.change(inputElement, {
    target: {
      value: '50',
    },
  });

  fireEvent.click(addBtnElement);

  expect(counterElement.className).toBe('');

  fireEvent.click(addBtnElement);

  expect(counterElement.className).toBe('green');

  fireEvent.click(addBtnElement);

  expect(counterElement.className).toBe('green');

  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);

  expect(counterElement.className).toBe('');

  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);

  expect(counterElement.className).toBe('red');
});
