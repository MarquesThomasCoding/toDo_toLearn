import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
    console.log(req.query + " : Hello World");
});

export default router;