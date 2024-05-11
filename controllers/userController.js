const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({_id}, 'secretkey', {expiresIn: '3d'});
}

const signUp = async (req, res) => {
  try{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
      username: req.body.username,
      password: hash,
    })

    const token = createToken(user._id);

    res.status(200).json({username: user.username, token});
  } catch(err) {
    res.status(400).json({error: err.message});
  }
}

const signIn = async (req, res) => {
  const user = await User.findOne({username: req.body.username});

  if(!user) {
    return res.status(400).json({error: 'Incorrect username'});
  }

  const match = await bcrypt.compare(req.body.password, user.password);

  if(!match) {
    return res.status(400).json({error: 'Incorrect password'});
  }

  const token = createToken(user._id);
  res.status(200).json({username: user.username, token}); 
}

module.exports = {signUp, signIn};