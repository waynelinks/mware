import { ValidationError } from 'express-validator'

import { CustomError } from './Custom_Error'
import { BAD_REQUEST } from '../constants/response_codes'

export class RequestValidationError extends CustomError {
  statusCode = BAD_REQUEST

  constructor(public errors: ValidationError[]) {
    super('Invalid Credentials!')

    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors() {
    return this.errors.map((err) => ({ message: err.msg, field: err.param }))
  }
}
