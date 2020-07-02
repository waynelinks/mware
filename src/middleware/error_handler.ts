import { Request, Response, NextFunction } from 'express'

import { CUSTOM_ERROR } from '../errors/Custom_Error'
import { BAD_REQUEST } from '../constants/response_codes'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CUSTOM_ERROR) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  return res.status(BAD_REQUEST).send({
    errors: [{ message: 'Something went wrong' }],
  })
}
