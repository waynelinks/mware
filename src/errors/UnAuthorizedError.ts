import { CustomError } from './CustomError'
import { UNAUTHORIZED } from '../constants/response_codes'

export class UnAuthorizedError extends CustomError {
  statusCode = UNAUTHORIZED

  reason = 'Not Authorized!'

  constructor() {
    super('Not Authorized!')

    Object.setPrototypeOf(this, UnAuthorizedError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ]
  }
}
