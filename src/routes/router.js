import { Router } from 'express';
import { getToLearns, getToLearn, createToLearn } from '../controllers/ToLearnController.js';

const router = Router();

router.get('/', (req, res) => {
    getToLearns(req, res);
    console.log("GET /");
});

router.get('/:id', (req, res) => {
    getToLearn(req, res);
    console.log("GET /:id");
});

router.post('/', (req, res) => {
    createToLearn(req, res);
    console.log("POST /");
});

export default router;