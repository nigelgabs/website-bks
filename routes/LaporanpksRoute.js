import express from "express";
import {
  getLaporanPkss,
  getLaporanPksById,
  createLaporanPks,
  updateLaporanPks,
  deleteLaporanPks
} from "../controllers/Laporanpks.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/laporanpks', verifyUser, getLaporanPkss);
router.get('/laporanpks/:id', verifyUser, getLaporanPksById);
router.post('/laporanpks', verifyUser, createLaporanPks);
router.patch('/laporanpks/:id', verifyUser, updateLaporanPks); 
router.delete('/laporanpks/:id', verifyUser, deleteLaporanPks);


export default router;