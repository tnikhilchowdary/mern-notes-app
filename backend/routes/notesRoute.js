import { Router } from "express";
import { getNotes, createNote, updateNote} from "../controllers/noteController.js";

const router = Router();

router.get("/", getNotes);
router.post("/", createNote);
router.put("/:id", updateNote);

export default router;