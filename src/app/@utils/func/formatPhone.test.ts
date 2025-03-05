import { expect, test, describe } from '@jest/globals';
import { formatPhone } from './formatPhone';

describe('formatPhone function', () => {
  test('應該將 09XX 格式的手機號碼轉換為 +8869XXX', () => {
    expect(formatPhone('0912345678')).toBe('+886912345678');
    expect(formatPhone('0987654321')).toBe('+886987654321');
  });

  test('應該將 9XX 格式的手機號碼轉換為 +8869XXX', () => {
    expect(formatPhone('912345678')).toBe('+886912345678');
    expect(formatPhone('987654321')).toBe('+886987654321');
  });

  test('應該返回 null 當手機號碼開頭為 0 但不是 10 碼', () => {
    expect(formatPhone('09123')).toBeNull();
    expect(formatPhone('09123456789')).toBeNull();
  });

  test('應該返回 null 當手機號碼開頭為 9 但不是 9 碼', () => {
    expect(formatPhone('91234')).toBeNull();
    expect(formatPhone('9123456789')).toBeNull();
  });

  test('應該返回 null 當手機號碼不是以 0 或 9 開頭', () => {
    expect(formatPhone('812345678')).toBeNull();
    expect(formatPhone('712345678')).toBeNull();
    expect(formatPhone('612345678')).toBeNull();
  });

  test('應該返回 null 當手機號碼格式不正確', () => {
    expect(formatPhone('')).toBeNull();
    expect(formatPhone('09123')).toBeNull();
    expect(formatPhone('09123456789')).toBeNull();
  });
});
