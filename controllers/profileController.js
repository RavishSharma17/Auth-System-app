const User = require('../models/User');

exports.getProfiles = async (req, res) => {
  try {
    const users = await User.find(req.user.role === 'admin' ? {} : { isPublic: true });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || (user.isPublic === false && req.user.role !== 'admin')) {
      return res.status(404).json({ error: 'Profile not found.' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, bio, phone, email, isPublic } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    user.name = name || user.name;
    user.bio = bio || user.bio;
    user.phone = phone || user.phone;
    user.email = email || user.email;
    user.isPublic = isPublic !== undefined ? isPublic : user.isPublic;
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};
