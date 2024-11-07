import { Router } from 'express';
import { createUser, addNoteForUser, getSingleUserById } from '../controllers/api_controller.js';
const router = Router();
// localhost:3333/api/users
// Create a POST route that creates a user in the collection using your User model and sends back the user object as a JSON response
router.post('/users', createUser);
// Create a POST route that adds a note for a user
router.post('/note', addNoteForUser);
// Get a single user and their notes
router.get('/user/:userId', getSingleUserById);
export default router;
