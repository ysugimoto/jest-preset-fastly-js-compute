/// <reference types="@fastly/js-compute" />
import * as geolocation from "fastly:geolocation";

test("fastly:geolocation", () => {
  expect(geolocation).toBeDefined();
  expect(geolocation.getGeolocationForIpAddress).toBeDefined();
  const g = geolocation.getGeolocationForIpAddress("127.0.0.1");
  expect(g.as_name).toBe(null);
  expect(g.as_number).toBe(null);
  expect(g.area_code).toBe(null);
  expect(g.city).toBe(null);
  expect(g.conn_speed).toBe(null);
  expect(g.conn_type).toBe(null);
  expect(g.continent).toBe(null);
  expect(g.country_code).toBe(null);
  expect(g.country_code3).toBe(null);
  expect(g.country_name).toBe(null);
  expect(g.gmt_offset).toBe(null);
  expect(g.latitude).toBe(null);
  expect(g.longitude).toBe(null);
  expect(g.metro_code).toBe(null);
  expect(g.postal_code).toBe(null);
  expect(g.proxy_description).toBe(null);
  expect(g.proxy_type).toBe(null);
  expect(g.region).toBe(null);
  expect(g.utc_offset).toBe(null);
});
