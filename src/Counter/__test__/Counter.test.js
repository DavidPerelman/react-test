import React from 'react';
import Counter from '../Counter';
import { render } from '@testing-library/react';
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
