const { check, validationResult } = require('express-validator');
const UserDTO = require('../dtos/userDTO');
const UserModel = require('../models/userModel');


exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    const userDTOs = users.map(user => new UserDTO(user));
    res.json(userDTOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userDTO = new UserDTO(user);
    res.json(userDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//-----------------------------------------------*************************  sign Up  *************************---------------------------------------
exports.createUser =[[
  check('UserName').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
  check('Email').isEmail().withMessage('Invalid email address'),
  check('Password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  check('PhoneNumber').isMobilePhone().withMessage('Invalid phone number'),

], async (req, res,next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { UserName, Email, Password, PhoneNumber, Address } = req.body;
  try {
    const newUser = await UserModel.createUser(UserName, Email, Password, PhoneNumber, Address);
    const newUserDTO = new UserDTO(newUser);
    res.status(201).json(newUserDTO);
  } catch (err) {
    next(err);
  }
}];

exports.updateUser =[  [
  check('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
  check('email').isEmail().withMessage('Invalid email address'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  check('phone_number').isMobilePhone().withMessage('Invalid phone number'),
], async (req, res,next) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
;
  
  const {UserId ,UserName, Email, Password, PhoneNumber, Address} = req.body;
  try {
    const updatedUser = await UserModel.updateUser(UserId, UserName, Email, Password, PhoneNumber, Address);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    const updatedUserDTO = new UserDTO(updatedUser);
    res.json(updatedUserDTO);
  } catch (err) {
    next(err);
  }
}];


exports.deleteUser = async (req, res,next) => {
  const { id } = req.params;
  try {
    const deletedUser = await UserModel.deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    const deletedUserDTO = new UserDTO(deletedUser);
    res.json(deletedUserDTO);
  } catch (err) {
    next(err);
  }
};
