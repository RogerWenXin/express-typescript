import { ERROR_MESSAGE } from '../routes/makeResponse'

function checkToken () {
  return function (target: any, methodName: any, desc: any) {
    const oMethod = desc.value
    desc.value = function (...args: any[]) {
      let token
      let inObject = false
      if (args[0] && typeof args[0] === 'object') {
        token = args[0].token
        inObject = true
      } else {
        token = args[0]
      }
      const valid = { valid: token === '1111', userId: '11111' }
      if (valid.valid) {
        if (inObject) {
          args[0].userId = valid.userId
        } else {
          args[0] = valid.userId
        }
        return oMethod.apply(this, args)
      } else {
        return ERROR_MESSAGE.tokenInvalid
      }
    }
  }
}

export { checkToken }
