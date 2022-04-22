import { Express, Request, Response } from 'express'
import { makeResponse } from './makeResponse'
import UserService from '../service/user.service'

function gardenRoute (app: Express) {
  app.post('/confession/garden-config', (req: Request, res: Response) => {
    makeResponse(res, { code: 0, data: {} })
  })

  app.post('/user/userinfo', (req: Request, res: Response) => {
    try {
      const { token } = req.body
      makeResponse(res, UserService.getUserInfo({ token }))
    } catch (e) {
      console.error(e)
      makeResponse(res, { code: 500, msg: '服务器出错了' })
    }
  })
}

export default gardenRoute
