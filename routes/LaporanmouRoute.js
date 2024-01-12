import express from "express";
import {
  getLaporanMous,
  getLaporanMouById,
  createLaporanMou,
  updateLaporanMou,
  deleteLaporanMou
} from "../controllers/Laporanmou.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/laporanmou', verifyUser, getLaporanMous);
router.get('/laporanmou/:id', verifyUser, getLaporanMouById);
router.post('/laporanmou', verifyUser, createLaporanMou);
router.patch('/laporanmou/:id',verifyUser, updateLaporanMou); 
router.delete('/laporanmou/:id', verifyUser, deleteLaporanMou);


export default router;