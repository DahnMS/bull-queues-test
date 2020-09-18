import { Router } from 'express';
import LogQueueService from '../services/LogQueueService';

const router = Router();

router.post('/', async (request, response) => {
  const { message } = request.body;

  await LogQueueService.add({ message });

  response.json({ message: 'Mensagem armazenada' });
});

export default router;
