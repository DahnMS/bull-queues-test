import fs from 'fs';
import BaseQueue from './BaseQueue';

interface IJobParamns {
  message: string;
}

interface IJob {
  data: IJobParamns;
  progress: (total: number) => void;
}

class SendQueue extends BaseQueue<IJobParamns> {
  constructor() {
    super('sendMessage');
  }

  handle(job: IJob) {
    const { message } = job.data;
    job.progress(10);

    fs.appendFile('log.text', `\n\n${message}`, () => {
      console.log(`Mensagem adicionada: ${message}`);
    });

    job.progress(100);
  }
}

export default new SendQueue();
