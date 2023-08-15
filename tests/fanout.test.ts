/// <reference types="@fastly/js-compute" />
import * as fanout from "fastly:fanout";

test("fastly:fanout", () => {
  expect(fanout).toBeDefined();
  expect(fanout.createFanoutHandoff).toBeDefined();
});
