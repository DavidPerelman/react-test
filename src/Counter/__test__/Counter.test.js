import React from 'react';
import Counter from '../Counter';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
  const component = render(<Counter />);
  const headerElement = component.getByTestId('header');

  expect(headerElement.textContent).toBe('My Counter');
});
