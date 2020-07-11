import { Request, Response, NextFunction } from 'express';

import { UNAUTHORIZED_ERROR } from '../errors/UnAuthorizedError'

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) throw new UNAUTHORIZED_ERROR()

  next()
}
