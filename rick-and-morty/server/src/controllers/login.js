const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const matchUsersPassEmail = users.find(
    (user) => user.password === password && user.email === email
  );
  //   if (matchUsersPassEmail) {
  //     return res.status(200).json({ access: true });   //Metodo con if
  //   }
  //   return res.status(200).json({ access: false });

  return matchUsersPassEmail
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false });
};

module.exports = {
  login,
};
