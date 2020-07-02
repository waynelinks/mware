import { CUSTOM_ERROR } from './Custom_Error'
import { BAD_REQUEST } from '../constants/response_codes'

export class BAD_REQUEST_ERROR extends CUSTOM_ERROR {
  statusCode = BAD_REQUEST

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, BAD_REQUEST_ERROR.prototype)
  }

  serializeErrors() {
    return [{
      message: this.message,
    }]
  }
}