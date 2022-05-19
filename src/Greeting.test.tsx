import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import Greeing from './Greeting';

describe.each([
  <Greeing username="AAA" />,
  <Greeing username="BBB" />,
  <Greeing username="CCC" />,
])('render Greeting %#', (el) => {
  test('toBeInTheDocument', () => {
    render(el);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('starts with Hello', () => {
    render(el);
    expect(screen.getByRole('heading')).toHaveTextContent(/^hello/i);
  });
});
