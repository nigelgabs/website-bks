import express from "express";
import {
  getMous,
  getMouById,
  createMou,
  updateMou,
  deleteMou
} from "../controllers/MoU.js";
import { verifyUser } from "../middleware/AuthUser.js";


const router = express.Router();

router.get('/mou', verifyUser, getMous);
router.get('/mou/:id', verifyUser, getMouById);
router.post('/mou', verifyUser, createMou);
router.patch('/mou/:id', verifyUser, updateMou);
router.delete('/mou/:id', verifyUser, deleteMou);


export default router;