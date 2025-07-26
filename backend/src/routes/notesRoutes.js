import express from "express"
import { getAllNotes } from "../controllers/notesController.js ";

import { createNotes } from "../controllers/notesController.js ";

import { updateNote } from "../controllers/notesController.js ";
import { deleteNotes } from "../controllers/notesController.js ";
import { getNotebyID } from "../controllers/notesController.js";


const router = express.Router();

router.get("/" ,getAllNotes);

router.get("/:id" ,getNotebyID);


router.post("/" ,createNotes);

 router.put("/:id" ,updateNote);

 router.delete("/:id" , deleteNotes );


export default  router