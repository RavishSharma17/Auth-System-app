const express = require('express');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware.protect, authMiddleware.admin, adminController.getAllUsers);
router.get('/:id', authMiddleware.protect, adminController.getUserById);
router.put('/:id', authMiddleware.protect, adminController.updateUserById);
router.delete('/:id', authMiddleware.protect, authMiddleware.admin, adminController.deleteUserById);

module.exports = router;
