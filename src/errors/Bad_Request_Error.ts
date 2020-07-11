import { CustomError } from './Custom_Error'
import { BAD_REQUEST } from '../constants/response_codes'

export class BadRequestError extends CustomError {
  statusCode = BAD_REQUEST

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serializeErrors() {
    return [{
      message: this.message,
    }]
  }
}