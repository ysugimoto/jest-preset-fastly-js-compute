/// <reference types="@fastly/js-compute" />
import * as kvstore from "fastly:kv-store";

test("fastly:kv-store", async () => {
  expect(kvstore).toBeDefined();
  expect(kvstore.KVStore).toBeDefined();
  const o = new kvstore.KVStore("animals");
  expect(o.get).toBeDefined();
  expect(o.put).toBeDefined();
  expect(o.get("cat")).resolves.toBe(null);
  expect(o.put("cat", "meow")).resolves.toBe(undefined);
  const cat = await o.get("cat");
  expect(cat?.arrayBuffer).toBeDefined();
  expect(cat?.bodyUsed).toBeDefined();
  expect(cat?.body).toBeDefined();
  expect(cat?.json).toBeDefined();
  expect(cat?.text).toBeDefined();
});
