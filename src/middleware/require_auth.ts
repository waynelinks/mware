import { Request, Response, NextFunction } from 'express';

import { UNAUTHORIZED_ERROR } from '../errors/Unauthorized_Error'

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) throw new UNAUTHORIZED_ERROR()

  next()
}
