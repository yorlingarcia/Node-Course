import { envs } from "./envs.plugin";

describe("env.plugin.ts", () => {
  test("should return env options", () => {
    expect(envs).toEqual({
      PORT: 3000,
      MAILER_EMAIL: "yorlin.garcia.dev@gmail.com",
      MAILER_SECRET_KEY: "fpbqkcbrgnvskvff",
      MAILER_SERVICE: "gmail",
      PROD: false,
      MOGO_URL: "mongodb://Yorlin:123456789@localhost:27017",
      MONGO_DB_NAME: "NOC-test",
      MONGO_USER: "Yorlin",
      MONGO_PASS: "123456789",
    });
  });

  test("should return error if not found env", async () => {
    jest.resetModules();
    process.env.PORT = "ABC";

    try {
      await import("./envs.plugin");
      expect(true).toBe(false);
    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    }
  });
});
