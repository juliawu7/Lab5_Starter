// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('no dashes spaces or parentheses', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('incorrect format', () => {
  expect(isPhoneNumber('(123)-4567890')).toBe(false);
});


test('missing .com', () => {
  expect(isEmail('julia@gmail')).toBe(false);
});
test('missing @', () => {
  expect(isEmail('meigmail.com')).toBe(false);
});


test('too short', () => {
  expect(isStrongPassword('abc')).toBe(false);
});
test('starts with number', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});


test('two-digit year', () => {
  expect(isDate('01/01/25')).toBe(false);
});
test('incorrect date format', () => {
  expect(isDate('01-01-2025')).toBe(false);
});


test('incorrect length', () => {
  expect(isHexColor('#12345')).toBe(false);
});
test('incorrect characters', () => {
  expect(isHexColor('#123JKL')).toBe(false);
});


//True Unit Tests isPhoneNumber
test('valid phone number: (619) 035-7390', () => {
  expect(isPhoneNumber('(619) 035-7390')).toBe(true);
});
test('valid phone number: 619-035-7390', () => {
  expect(isPhoneNumber('619-035-7390')).toBe(true);
});


//True Unit Tests isEmail
test('valid email: meiman@gmail.com', () => {
  expect(isEmail('meiman@gmail.com')).toBe(true);
});
test('valid email: julia@ucsd.edu', () => {
  expect(isEmail('julia@ucsd.edu')).toBe(true);
});


//True Unit Tests isStrongPassword
test('valid password: Bsde333', () => {
  expect(isStrongPassword('Bsde333')).toBe(true);
});
test('valid password: Fd_392', () => {
  expect(isStrongPassword('Fd_392')).toBe(true);
});


//True Unit Tests isDate
test('valid date: 5/6/2025', () => {
  expect(isDate('5/6/2025')).toBe(true);
});
test('valid date: 05/07/2025', () => {
  expect(isDate('05/07/2025')).toBe(true);
});


//True Unit Tests isHex
test('valid hex color: #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('valid hex color (no #): 800080', () => {
  expect(isHexColor('800080')).toBe(true);
});