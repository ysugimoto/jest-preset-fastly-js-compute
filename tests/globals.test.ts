/// <reference types="@fastly/js-compute" />

test("globals", () => {
  expect(fastly.baseURL).toBeDefined();
  expect(fastly.defaultBackend).toBeDefined();

  expect(fastly.env).toBeDefined();
  expect(fastly.env.get).toBeDefined();

  expect(fastly.getLogger).toBeDefined();

  expect(fastly.enableDebugLogging).toBeDefined();
  expect(fastly.getGeolocationForIpAddress).toBeDefined();
  expect(fastly.includeBytes).toBeDefined();

  expect(addEventListener).toBeDefined();
  expect(fetch).toBeDefined();
  expect(crypto).toBeDefined();
  expect(crypto.getRandomValues).toBeDefined();
  expect(crypto.randomUUID).toBeDefined();
  expect(crypto.subtle).toBeDefined();
  expect(crypto.subtle.digest).toBeDefined();
  expect(CompressionStream).toBeDefined();
  expect(DecompressionStream).toBeDefined();
});
