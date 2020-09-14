const fizbuz = require("../fizzbuzz");

test("Testing fizzbuzz", () => {
  const result = fizbuz(5);
  expect(result).toEqual(
    expect.arrayContaining([
      "--Not Valid--",
      "--Not Valid--",
      "Fizz",
      "--Not Valid--",
      "Buzz",
    ])
  );
});
