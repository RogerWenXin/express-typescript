import { Response } from 'express'
import type { BaseResponeObj } from '../common/types'

function makeResponse (res: Response, data: BaseResponeObj): Response {
  if (!data.code) {
    data.code = 0
  }
  return res.header('Access-Control-Allow-Origin', '*')
    .header('Access-Control-Allow-Methods', 'post')
    .header('Access-Control-Allow-Headers', 'x-requested-with,content-type')
    .json(data)
}

const ERROR_MESSAGE = {
  tokenInvalid: { code: 300, msg: '登录失效' }
}

export { makeResponse, ERROR_MESSAGE }
