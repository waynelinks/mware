import { CUSTOM_ERROR } from './Custom_Error'
import { INTERNAL_SERVER_ERROR } from '../constants/response_codes'

export class DB_CONNECTION_ERROR extends CUSTOM_ERROR {
  statusCode = INTERNAL_SERVER_ERROR
  reason = 'Error connecting to database'

  constructor() {
    super('Error connecting to database')

    Object.setPrototypeOf(this, DB_CONNECTION_ERROR.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ]
  }
}
