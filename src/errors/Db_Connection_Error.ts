import { CustomError } from './Custom_Error'
import { INTERNAL_SERVER_ERROR } from '../constants/response_codes'

export class DbConnectionError extends CustomError {
  statusCode = INTERNAL_SERVER_ERROR

  reason = 'Error connecting to database'

  constructor() {
    super('Error connecting to database')

    Object.setPrototypeOf(this, DbConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ]
  }
}
