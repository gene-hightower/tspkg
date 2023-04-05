import { hello } from "../src/index";

describe("hello", () => {
  it("get the correct value", () => {
    const value = hello("foo");
    expect(value).toEqual("Hello foo!");
  });
});
