import express from "express";
import {getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { refreshToken } from "../controllers/RefreshToken.js";
//miftahul jannah
const router = express.Router();

router.get('/users', getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;