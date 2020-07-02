import { CUSTOM_ERROR } from './Custom_Error'
import { NOT_FOUND } from '../constants/response_codes'

export class NOT_FOUND_ERROR extends CUSTOM_ERROR {
  statusCode = NOT_FOUND

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, NOT_FOUND_ERROR.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ]
  }
}
