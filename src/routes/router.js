import { Router } from 'express';

import toDo from './ToDoRoutes.js'
import toLearn from './ToLearnRoutes.js';

const router = Router();

router.use('/to-dos', toDo);
router.use('/to-learns', toLearn);

export default router;