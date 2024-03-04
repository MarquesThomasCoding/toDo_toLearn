import { Router } from 'express';
import { getToDos, createToDo } from '../controllers/ToDoController.js';

const router = Router();

router.get('/', (req, res) => {
    getToDos(req, res);
    console.log("GET /");
});

router.post('/', (req, res) => {
    createToDo(req, res);
    console.log("POST /");
});

export default router;