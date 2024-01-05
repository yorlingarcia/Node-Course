import { buildMakePerson } from "../../src/js-foundation/05-factory";
// import { getUserById } from '../../src/js-foundation/03-callbacks';
// import { getAge } from '../../src/plugins/getAgePlugin';

describe("js-foundation/05-factory.ts", () => {
  const getUuId = () => "1234";
  const getAge = () => 35;

  test("buildMakePersone should return a funtion", () => {
    const makePerson = buildMakePerson({ getUuId, getAge });
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUuId, getAge });
    const johnDoe = makePerson({ name: "John Doe", birthdate: "1985-10-21" });
    expect(johnDoe).toEqual({
      id: "1234",
      name: "John Doe",
      birthdate: "1985-10-21",
      age: 35,
    });
  });
});
