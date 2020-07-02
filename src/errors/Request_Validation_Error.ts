import { CUSTOM_ERROR } from './Custom_Error'
import { BAD_REQUEST } from '../constants/response_codes'

export class REQUEST_VALIDATION_ERROR extends CUSTOM_ERROR {
  statusCode = BAD_REQUEST

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, REQUEST_VALIDATION_ERROR.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ]
  }
}
