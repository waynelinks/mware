import { Request, Response } from 'express'

import { NOT_FOUND_ERROR } from '../errors/Not_Found_Error'

export default (app: any) => {
  app.all('*', async (req: Request, res: Response) => {
    throw new NOT_FOUND_ERROR(`Can't find ${req.originalUrl} on this server!`)
  })
}
