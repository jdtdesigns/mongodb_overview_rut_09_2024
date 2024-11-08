import { Router } from 'express';

// Import the getAllNotes controller function
import { 
  createUser, 
  addNoteForUser, 
  getSingleUserById,
  getAllNotes,
  deleteNoteForUser,
  addLikeToNote,
  getLikesForNote
} from '../controllers/api_controller.js';

const router = Router();

// localhost:3333/api/users
// POST - Create a user
router.post('/users', createUser);

// Create a POST route that adds a note for a user
router.post('/note', addNoteForUser);

// GET a single user and their notes
router.get('/user/:user_id', getSingleUserById);

// GET all notes
// Pass in our getAllNotes function to the /notes route
router.get('/notes', getAllNotes);

// DELETE a note for a user
router.delete('/note/:note_id', deleteNoteForUser);

// PUT Add a like to a note
router.put('/note/like', addLikeToNote);

// GET Likes for a note
router.get('/note/likes', getLikesForNote);

export default router;