import { expect, test, describe } from '@jest/globals';
import { incrementCount } from './DashboardPage';

describe('incrementCount function', () => {
  test('應該將數字加 1', () => {
    expect(incrementCount(0)).toBe(1);
    expect(incrementCount(5)).toBe(6);
    expect(incrementCount(-1)).toBe(0);
  });

  test('應該返回數字類型', () => {
    expect(typeof incrementCount(10)).toBe('number');
  });
});
