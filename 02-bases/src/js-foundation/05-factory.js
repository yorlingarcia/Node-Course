const buildMakePerson = ({ getUuId, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUuId(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

module.exports = {
  buildMakePerson,
};
