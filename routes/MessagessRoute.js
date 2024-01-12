import express from "express";
import {
  getMessages,
  getMessagesById,
  createMessages,
  updateMessages,
  deleteMessages
} from "../controllers/Message.js";

const router = express.Router();

router.get('/message', getMessages);
router.get('/message/:id', getMessagesById);
router.post('/message', createMessages);
router.patch('/message/:id', updateMessages); 
router.delete('/message/:id', deleteMessages);


export default router;