export abstract class CUSTOM_ERROR extends Error {
  abstract statusCode: number

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, CUSTOM_ERROR.prototype)
  }

  abstract serializeErrors(): { message: string; field?: string }[]
}
