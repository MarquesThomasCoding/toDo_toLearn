import { Router } from 'express';
import { getToDos, getToDo, createToDo, updateToDo } from '../controllers/ToDoController.js';

const router = Router();

router.get('/', (req, res) => {
    getToDos(req, res);
    console.log("GET /");
});

router.post('/', (req, res) => {
    createToDo(req, res);
    console.log("POST /");
});

router.get('/:id', (req, res) => {
    getToDo(req, res);
    console.log("GET /" + req.params.id);
});

router.put('/:id', (req, res) => {
    updateToDo(req, res);
    console.log("PUT /" + req.params.id);
});

export default router;