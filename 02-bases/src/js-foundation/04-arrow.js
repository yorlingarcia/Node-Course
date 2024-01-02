const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);
  user ? callback(null, user) : callback(`USUARIO no econtrado con id: ${id}`);
  //   if (!user) {
  //     return callback(`USUARIO no econtrado con id: ${id}`);
  //   }
  //   return callback(null, user);
};

module.exports = {
  getUserById,
};
