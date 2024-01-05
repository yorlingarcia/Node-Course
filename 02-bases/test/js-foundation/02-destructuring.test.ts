import { characters } from "../../src/js-foundation/02-desestructuracion";

describe("js-foundation/02-desestructuracion.ts", () => {
  test("characters should contain Flash, Superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("First character should be Flash, and second Superman", () => {
    const [flash, superman] = characters;

    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
