export enum Status {
  CREATED = 'created',
  PROCESSING = 'processing',
  ABORTED = 'abort',
  ERROR = 'error',
  DONE = 'done',
}

export interface ITask {
  id: number;
  task: string;
  status: Status;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
