import { CUSTOM_ERROR } from './Custom_Error'
import { INTERNAL_SERVER_ERROR } from '../constants/response_codes'

export class SERVER_ERROR extends CUSTOM_ERROR {
  statusCode = INTERNAL_SERVER_ERROR

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, SERVER_ERROR.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ]
  }
}