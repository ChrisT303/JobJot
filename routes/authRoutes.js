import express from 'express';
const router = express.Router();

import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, 
    max: 15,
    message: "Too many requests, please try again later"
});

import {register, login, updateUser} from '../controllers/authController.js';
import authUser from '../middleware/auth.js';

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/updateUser').patch(authUser, updateUser);


export default router;

