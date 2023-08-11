/// <reference types="@fastly/js-compute" />
import * as cacheoverride from "fastly:cache-override";

test("fastly:cache-override", () => {
  expect(cacheoverride).toBeDefined();
  expect(cacheoverride.CacheOverride).toBeDefined();
  const c = new cacheoverride.CacheOverride("none", {
    ttl: 1,
    swr: 2,
    surrogateKey: "meow",
    pci: true,
  });
  expect(c.mode).toBe("none");
  expect(c.ttl).toBe(1);
  expect(c.swr).toBe(2);
  expect(c.surrogateKey).toBe("meow");
  expect(c.pci).toBe(true);
});
