const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  photo: { type: String },
  bio: { type: String },
  phone: { type: String },
  isPublic: { type: Boolean, default: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  provider: { type: String, enum: ['local', 'google'], default: 'local' },
  providerId: { type: String }
});

module.exports = mongoose.model('User', userSchema);
