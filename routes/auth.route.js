const { Router } = require('express');
const User = require('../models/User');
const router = Router();

router.post('/registration', async (req, res) => {
  try {
    const { 
      email,
      password,
      retypePassword,
      nikname,
      lastName,
      firstName,
      file
    } = req.body;

    const isUsed = await User.findOne({ email });

    if(isUsed) {
      return res.status(300).json({message: 'This email is busy, try another'})
    }

    const user = new User({
      email,
      password,
      retypePassword,
      nikname,
      lastName,
      firstName,
      file
    });

    await user.save();

    res.status(201).json({message: 'User successfully created'});

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
