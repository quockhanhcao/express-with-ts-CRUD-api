import express from 'express';
import emojis from './emojis';
import todos from './todos/todos.route';

import MessageResponse from '../interfaces/MessageResponse';
const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({ message: 'API' });
});

router.use('/emojis', emojis);
router.use('/todos', todos);

export default router;
