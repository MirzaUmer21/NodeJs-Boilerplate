const Joi = require('joi');
const User = require('../models/users');

const authControllers = {
  async login() {},
  async register(req, res, next) {
    const userRegisterSchema = Joi.object({
      username: Joi.string().min(5).max(30).required(),
      name: Joi.string().max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(4).required()
    });

    const { error } = userRegisterSchema.validate(req.body);

    if (error) {
      return next(error);
    }
    // Check if user already exists
    const { username, name, email, password } = req.body;
    try {
      const isUserExists = await User.exists({ email });
      const isUserNameExists = await User.exists({ username });
      if (isUserExists) {
        const error = {
          status: 401,
          message: 'Email already exists.'
        };
        return next(error);
      }
      if (isUserNameExists) {
        const error = {
          status: 401,
          message: 'Username already exists.'
        };
        return next(error);
      }
      const userToRegister = new User({
        username,
        name,
        email,
        password
      });
      const user = await userToRegister.save();
      console.log(user);
      return res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  }
};
module.exports = authControllers;
