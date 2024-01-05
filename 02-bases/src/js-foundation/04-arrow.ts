interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

export const getUserById = (
  id: number,
  callback: (err?: string, user?: User) => void
) => {
  const user = users.find((user) => user.id === id);
  user
    ? callback(undefined, user)
    : callback(`USUARIO no econtrado con id: ${id}`);
  //   if (!user) {
  //     return callback(`USUARIO no econtrado con id: ${id}`);
  //   }
  //   return callback(null, user);
};
