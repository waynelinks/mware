import { CustomError } from './CustomError'
import { NOT_FOUND } from '../constants/response_codes'

export class NotFoundError extends CustomError {
  statusCode = NOT_FOUND

  reason = 'Route not found'

  constructor() {
    super('Route not found')

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ]
  }
}
