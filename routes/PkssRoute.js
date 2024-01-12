import express from "express";
import {
  getPkss,
  getPksById,
  createPks,
  updatePks,
  deletePks
} from "../controllers/PkS.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/pks', verifyUser, getPkss);
router.get('/pks/:id', verifyUser, getPksById);
router.post('/pks', verifyUser, createPks);
router.patch('/pks/:id', verifyUser, updatePks);
router.delete('/pks/:id',verifyUser, deletePks);


export default router;