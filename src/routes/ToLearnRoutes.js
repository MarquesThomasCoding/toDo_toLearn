import { Router } from 'express';
import { getToLearns, getToLearn, createToLearn, deleteToLearn, updateToLearn } from '../controllers/ToLearnController.js';

const router = Router();

router.get('/', (req, res) => {
    getToLearns(req, res);
    console.log("GET /");
});

router.post('/', (req, res) => {
    createToLearn(req, res);
    console.log("POST /");
});

router.get('/:id', (req, res) => {
    getToLearn(req, res);
    console.log("GET /" + req.params.id);
});

router.put('/:id', (req, res) => {
    updateToLearn(req, res);
    console.log("PUT /" + req.params.id);
});

router.delete('/:id', (req, res) => {
    deleteToLearn(req, res);
    console.log("DELETE /" + req.params.id);
});

export default router;