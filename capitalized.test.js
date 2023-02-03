describe("capitalize", () => {
  test("capitalizes the first character of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("returns an empty string if the input is an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("returns the same string if it only has one character", () => {
    expect(capitalize("a")).toBe("A");
  });
});

function capitalize(string) {
  if (string.length === 0) return "";
  return string[0].toUpperCase() + string.slice(1);
}
