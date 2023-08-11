/// <reference types="@fastly/js-compute" />
import * as dictionary from "fastly:dictionary";

test("fastly:dictionary", () => {
  expect(dictionary).toBeDefined();
  expect(dictionary.Dictionary).toBeDefined();
  const c = new dictionary.Dictionary("meow");
  expect(c.get).toBeDefined();
  const e = c.get("cat");
  // @note always return null
  expect(e).toBe(null);
});
