import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks", () => {
  test("getUserById should return an error if user does no exit", (done) => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`USUARIO no econtrado con id: ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  test("getUserById should return the user John Doe", (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toStrictEqual({ id: 1, name: "John Doe" });
      done();
    });
  });
});
