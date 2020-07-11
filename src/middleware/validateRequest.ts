import { validationResult } from 'express-validator'
import { Request } from 'express-validator/src/base'
import { Response, NextFunction } from 'express'
import { RequestValidationError } from '../errors/Request_Validation_Error'

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) throw new RequestValidationError(errors.array())

  next()
}
