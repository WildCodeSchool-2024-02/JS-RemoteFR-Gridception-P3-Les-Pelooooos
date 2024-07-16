const Joi = require("joi");

const checkRegisterDatas = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
    confirm_password: Joi.any()
      .valid(Joi.ref('password'))
      .required()
      .label('Confirm password')
      .messages({ 'any.only': '{{#label}} does not match' }),
    gender: Joi.string().required(),
    firstname: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    birthdate: Joi.date().max('2006-01-01').required(),
    city: Joi.string().required(),
    postal_code: Joi.string().required(),
    cars_owned: Joi.number().integer().required(),
    vehicles: Joi.array().items(
      Joi.object({
        brand_name: Joi.string().min(2).required(),
        model: Joi.string().min(2).required(),
        plug_type: Joi.string().required(),
      })
    ),
    role: Joi.string().valid('user', 'admin').required(),
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
