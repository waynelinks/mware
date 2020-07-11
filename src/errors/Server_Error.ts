import { CustomError } from './Custom_Error'
import { INTERNAL_SERVER_ERROR } from '../constants/response_codes'

export class ServerError extends CustomError {
  statusCode = INTERNAL_SERVER_ERROR

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, ServerError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ]
  }
}