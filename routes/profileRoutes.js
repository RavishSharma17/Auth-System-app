// routes/profileRoutes.js
const express = require('express');
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware.protect, profileController.getProfiles);
router.get('/:id', authMiddleware.protect, profileController.getProfileById);
router.put('/', authMiddleware.protect, profileController.updateProfile);

module.exports = router;
