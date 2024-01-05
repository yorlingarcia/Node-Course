import { getUuId } from "../../src/plugins/getIdPlugin";

describe("plugins/getIdPlugin.ts", () => {
  test("getUuId() should return a UuId", () => {
    const uuId = getUuId();

    expect(typeof uuId).toBe("string");
    expect(uuId.length).toBe(36);
  });
});
