const argon2 = require("argon2");
const tables = require("../../database/tables");

const { createUser } = require("../../database/models/UsersRepository");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await tables.users.readOneByEmail(email);

  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }
  const passwordMatch = await argon2.verify(user.password, password);

  if (!passwordMatch) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  return res.json({ success: true, user: { id: user.id, email: user.email } });
};

const register = async (req, res) => {
  const {
    gender,
    lastname,
    firstname,
    dateOfBirth,
    email,
    city,
    postalCode,
    password,
    carsOwned,
    brandName,
    model,
    isAdmin,
  } = req.body;

  try {
    const hashedPassword = await argon2.hash(password, hashingOptions);
    const userId = await createUser({
      gender,
      lastname,
      firstname,
      dateOfBirth,
      email,
      city,
      postalCode,
      password: hashedPassword,
      carsOwned,
      brandName,
      model,
      isAdmin,
    });
    res.json({ success: true, userId });
  } catch (error) {
    console.error("Ereur d'enregistrement du profil", error);
    res.status(500).json({ success: false, message: "Erreur du serveur" });
  }
};

const checkAuth = (req, res) => {
  res.json({ authenticated: true });
};

module.exports = { login, register, checkAuth };
