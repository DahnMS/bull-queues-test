import QueueService from './base/QueueService';

interface IJobData {
  message: string;
}

class CapitalizeQueueService extends QueueService<IJobData> {
  handle({ data: { message } }: { data: IJobData }) {
    console.log(
      `Capitalized: ${message
        .toLocaleLowerCase()
        .replace(/^./, char => char.toUpperCase())}`,
    );
  }
}

export default new CapitalizeQueueService('capitalizeJob');
