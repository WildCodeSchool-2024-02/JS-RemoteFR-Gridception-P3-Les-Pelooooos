const argon2 = require("argon2");
const tables = require("../../database/tables");

const { createUser } = require("../../database/models/UsersRepository");

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
    confirmPassword,
    carsOwned,
    brandName,
    model,
  } = req.body;
  console.info(
    gender,
    lastname,
    firstname,
    dateOfBirth,
    email,
    city,
    postalCode,
    password,
    confirmPassword,
    carsOwned,
    brandName,
    model
  );

  try {
    const hashPassword = argon2.hash(password);
    const userId = await createUser({
      gender,
      lastname,
      firstname,
      dateOfBirth,
      email,
      city,
      postalCode,
      password: hashPassword,
      confirmPassword,
      carsOwned,
      brandName,
      model,
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
