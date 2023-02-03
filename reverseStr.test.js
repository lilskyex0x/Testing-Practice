function reverseString(string) {
  return string.split("").reverse().join("");
}

test('reverses the string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
