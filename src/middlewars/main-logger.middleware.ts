import { NextFunction, Request, Response } from 'express';
import { Logger } from '@nestjs/common';

export function mainLogger(req: Request, res: Response, next: NextFunction) {
  Logger.debug('Main logger', 'Main');
  next();
}
