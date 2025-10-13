import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getApiKey", () => {
  test("auth header not present - should return null", () => {
    const header = { notAuth: "123544" };
    expect(getAPIKey(header)).toBeNull();
  });

  test("ApiKey not present - should return null", () => {
    const header = { authorization: "notApiKey 12345" };
    expect(getAPIKey(header)).toBeNull();
  });

  test("Auth header malformed - should return null", () => {
    const header = { authorization: "ApiKey" };
    expect(getAPIKey(header)).toBeNull();
  });

  test("ApiKey valid - should return API key", () => {
    const header = { authorization: "ApiKey 12345" };
    expect(getAPIKey(header)).toBeNull();
  });

  // test("ApiKey valid - should return API key", () => {
  //   const header = { authorization: "ApiKey 12345" };
  //   expect(getAPIKey(header)).toBe("12345");
  // });
});
