const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const adminRoutes = require('./routes/adminRoutes');
const keys = require('./config/keys');

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(keys.MONGO_URI, {})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: keys.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport');

app.use('/auth', authRoutes);
app.use('/profiles', profileRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h1>Base Page Reached!!</h1>'));
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
