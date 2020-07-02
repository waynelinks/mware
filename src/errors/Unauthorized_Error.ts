import { CUSTOM_ERROR } from './Custom_Error'
import { UNAUTHORIZED } from '../constants/response_codes'

export class UNAUTHORIZED_ERROR extends CUSTOM_ERROR {
  statusCode = UNAUTHORIZED
  reason = 'Not Authorized!'

  constructor() {
    super('Not Authorized!')

    Object.setPrototypeOf(this, UNAUTHORIZED_ERROR.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ]
  }
}