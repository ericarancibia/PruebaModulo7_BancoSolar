import express from "express";

import { home, addUser, getUser, editUser, deleteUser, addTranfer, getTranfer } from "../controllers/controller.js";

const router = express.Router();

router.get("/", home)

router.post("/usuario", addUser)

router.get("/usuarios", getUser)

router.put('/usuario', editUser)

router.delete('/usuario', deleteUser)

router.post('/transferencia', addTranfer)

router.get('/transferencias', getTranfer)

export default router