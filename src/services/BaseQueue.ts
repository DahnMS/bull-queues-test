import Queue from 'bull';
import { setQueues } from 'bull-board';
import redisConfig from '../config/redis';

interface IJob<T> {
  data: T;
  progress: (total: number) => void;
}

export default abstract class BaseQueue<T> {
  private queue: Queue.Queue;

  constructor(private key: string) {
    this.queue = new Queue(this.key, {
      redis: redisConfig,
    });

    setQueues(this.queue);
  }

  protected abstract handle(job: IJob<T>): void;

  add(data: T): Promise<unknown> {
    return this.queue.add(data);
  }

  process(): void {
    this.queue.process(this.handle);
  }
}
