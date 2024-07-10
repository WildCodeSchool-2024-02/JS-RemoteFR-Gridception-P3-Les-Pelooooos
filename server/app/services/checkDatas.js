const Joi = require("joi");

const checkRegisterDatas = (req, res, next) => {
  const schema = Joi.object({
    gender: Joi.string().presence("required"),
    lastname: Joi.string().min(2).presence("required"),
    firstname: Joi.string().min(2).presence("required"),
    date_of_birth: Joi.date().max("2006-01-01").presence("required"), // date de naissance maximale pour que l'utilisateur ait au moins 18 ans
    email: Joi.string().email().presence("required"),
    city: Joi.string().presence("required"),
    postal_code: Joi.string().presence("required"),
    password: Joi.string().min(6).max(20).presence("required"),
    confirm_password: Joi.any()
      .equal(Joi.ref("password"))
      .presence("required")
      .messages({
        "any.only": "Confirmation invalide 🤨",
      }),
    cars_owned: Joi.number().integer().presence("required"),
    // is_admin: Joi.boolean().required(),
    // reservations_id: Joi.number().integer().optional().allow(null)
    brand_name: Joi.string().min(2).presence("required"),
    model: Joi.string().min(2).presence("required"),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  return next();
};

const checkLoginDatas = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(6).max(20).presence("required"),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  return next();
};

module.exports = {
  checkRegisterDatas,
  checkLoginDatas,
};
