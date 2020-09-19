import { Router, Request, Response } from 'express';

import capitalizeQueueService from '../services/CapitalizeQueueService';

const router = Router();

router.post(
  '/capitalize/:message',
  async (request: Request, response: Response) => {
    const { message } = request.params;

    await capitalizeQueueService.add({ message });

    return response.json({ message: 'Texto será exibido no console' });
  },
);
