import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
    console.log("GET /");
});

export default router;