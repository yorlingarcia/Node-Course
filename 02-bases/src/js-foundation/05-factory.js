const { getAge, getUuId } = require("../plugin/index");

console.log(getAge);
const obj = { name: "john Doe", birthdate: "1985-10-21" };

const buildPerson = ({ name, birthdate }) => {
  return {
    id: getUuId(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
  };
};

const john = buildPerson(obj);
console.log(john);
