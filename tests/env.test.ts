/// <reference types="@fastly/js-compute" />
import { env } from "fastly:env";

test("fastly:env", () => {
  expect(env).toBeDefined();
});
