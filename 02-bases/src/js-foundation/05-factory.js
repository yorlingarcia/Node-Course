const obj = { name: "john Doe", birthdate: "1985-10-21" };

const buildPerson = ({ name, birthdate }) => {
  return {
    id: new Date().getTime(),
    name: name,
    birthdate: birthdate,
    age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
  };
};

const john = buildPerson(obj);
console.log(john);
