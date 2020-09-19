import fs from 'fs';
import QueueService from './base/QueueService';

interface IJobParamns {
  message: string;
}

interface IJob {
  data: IJobParamns;
  progress: (total: number) => void;
}

class LogQueueService extends QueueService<IJobParamns> {
  handle(job: IJob) {
    const { message } = job.data;
    job.progress(10);

    fs.appendFile('log.text', `\n\n${message}`, () => {
      job.progress(100);
      console.log(`Mensagem adicionada: ${message}`);
    });
  }
}

export default new LogQueueService('logJob');
