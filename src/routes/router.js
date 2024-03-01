import { Router } from 'express';

import toLearn from './ToLearnRoutes.js';

const router = Router();

router.use('/to-learns', toLearn);

export default router;