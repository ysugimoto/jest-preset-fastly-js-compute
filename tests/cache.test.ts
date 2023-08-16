/// <reference types="@fastly/js-compute" />
import * as cache from "fastly:cache";

test("fastly:cache", async () => {
  // Class and methods definition
  expect(cache).toBeDefined();
  expect(cache.SimpleCache).toBeDefined();
  expect(cache.SimpleCache.get).toBeDefined();
  expect(cache.SimpleCache.set).toBeDefined();
  expect(cache.SimpleCache.getOrSet).toBeDefined();
  expect(cache.SimpleCache.purge).toBeDefined();

  // Behaviors
  expect(cache.SimpleCache.get("foo")).toBeNull();

  cache.SimpleCache.set("foo", "bar", 1);
  expect(cache.SimpleCache.get("foo")).not.toBeNull();
  // 2 seconds after, cache object should be expired
  await new Promise((resolve) => setTimeout(resolve, 2000));
  expect(cache.SimpleCache.get("foo")).toBeNull();

  // Explicitly purge cache
  cache.SimpleCache.set("cat", "meow", 100);
  cache.SimpleCache.purge("cat", { scope: "pop" });
  expect(cache.SimpleCache.get("cat")).toBeNull();
});
