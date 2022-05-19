import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';

import Greeing from './Greeting';

describe.each([
  <Greeing key={1} username="AAA" />,
  <Greeing key={2} username="BBB" />,
  <Greeing key={3} username="CCC" />,
])('render Greeting %#', (el: ReactElement) => {
  test('toBeInTheDocument', () => {
    render(el);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('starts with Hello', () => {
    render(el);
    expect(screen.getByRole('heading')).toHaveTextContent(/^hello/i);
  });
});
