function stringLength(string) {
  if (string.length < 1) {
    throw new Error("String must be at least 1 character long");
  }
  if (string.length > 10) {
    throw new Error("String must not be longer than 10 characters");
  }
  return string.length;
}

test('returns the number of characters in the string', () => {
  expect(() => stringLength('hello')).not.toThrow();
  expect(stringLength('hello')).toBe(5);
  expect(() => stringLength('world')).not.toThrow();
  expect(stringLength('world')).toBe(5);
});

test('throws an error if the string is shorter than 1 character', () => {
  expect(() => stringLength('')).toThrow('String must be at least 1 character long');
});

test('throws an error if the string is longer than 10 characters', () => {
  expect(() => stringLength('01234567890')).toThrow('String must not be longer than 10 characters');
});
