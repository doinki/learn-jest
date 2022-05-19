import { describe, expect, test } from '@jest/globals';

import sum from './sum';

describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(sum(a, b)).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(sum(a, b)).not.toBeLessThan(expected);
  });
});

describe.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])('.add(%a, %b) %#', ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(sum(a, b)).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(sum(a, b)).not.toBeLessThan(expected);
  });
});
