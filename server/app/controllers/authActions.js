const argon2 = require("argon2");
const tables = require("../../database/tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await tables.auth.readOneByEmail(email);

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

  return res.json({
    success: true,
    user: {
      id: user.id,
      gender: user.gender,
      dateOfBirth: user.date_of_birth,
      lastName: user.lastname,
      firstName: user.firstname,
      email: user.email,
      city: user.city,
      postalCode: user.postal_code,
      carsOwned: user.cars_owned,
      role: user.is_admin,
      reservationsId: user.reservations_id,
    },
  });
};

const register = async (req, res) => {
 
  const {
    gender,
    lastname,
    firstname,
    birthdate,
    email,
    city,
    postalCode,
    password,
    carsOwned,
    // vehicles,
    role,
  } = req.body;

  try {
    const hashedPassword = await argon2.hash(password, hashingOptions);

    const usersId = await tables.users.create({
      gender,
      lastname,
      firstname,
      birthdate,
      email,
      city,
      postalCode,
      password: hashedPassword,
      carsOwned,
      role,
    });
   

    // if (vehicles === 1) {
    //   const { brandName, model, plugType } = vehicles[0];

    //   const modelId = await tables.models.read({
    //     where: [{ model_name: model }],
    //   });

    //   const brandId = await tables.brands.read({
    //     where: [{ brand_name: brandName }],
    //   });

    //   if (modelId && brandId) {
    //     await tables.cars.create({
    //       brand_id: brandId.id,
    //       model_id: modelId.id,
    //       user_id: usersId,
    //       plug_type: plugType,
        
    //   });
    //   } else {
    //     console.info("Erreur de lecture du model ou brand");
    //   }
    
    // }
    // console.log("MODEL", modelId);

    // aller chercher le brandId / modelID donné dans la ligne 65 - considerer qu'un user envoie 1 voiture - tables.brand.read

    res.json({ success: true, usersId });
  } catch (error) {
    console.error("Ereur d'enregistrement du profil", error);
    res.status(500).json({ success: false, message: "Erreur du serveur" });
  }
};

const checkAuth = (req, res) => {
  res.json({ authenticated: true });
};

module.exports = { login, register, checkAuth };
