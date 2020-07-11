import { CustomError } from './Custom_Error'
import { NOT_FOUND } from '../constants/response_codes'

export class NotFoundError extends CustomError {
  statusCode = NOT_FOUND

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ]
  }
}
