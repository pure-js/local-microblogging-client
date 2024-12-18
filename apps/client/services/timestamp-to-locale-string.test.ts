import { test, expect } from 'vitest';

import { timestampToLocaleString } from './timestamp-to-locale-string';

test('1654024577 equals May 31', () => {
  expect(
    timestampToLocaleString(1654024577, new Date('2022-06-12')),
  ).toStrictEqual({ date: 'May 31', htmlDatetime: '2022-05-31' });
});

test('1619792177 equals May 31', () => {
  expect(timestampToLocaleString(1619792177)).toStrictEqual({
    date: 'April 30, 2021',
    htmlDatetime: '2021-04-30',
  });
});
