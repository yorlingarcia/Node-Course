const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return callback(`USUARIO no econtrado con id: ${id}`);
  }
  return callback(null, user);
  //   console.log({ user });
}

// getUserById(1);
module.exports = {
  getUserById,
};
