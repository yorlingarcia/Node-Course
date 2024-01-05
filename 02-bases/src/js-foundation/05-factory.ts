interface BuildMakePersonOptions {
  getUuId: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({
  getUuId,
  getAge,
}: BuildMakePersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUuId(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};
