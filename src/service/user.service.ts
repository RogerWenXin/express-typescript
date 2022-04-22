import { checkToken } from '../common/token'
import type { BaseResponeObj, TokenRequestObj } from '../common/types'
class UserService {
  static weixinLogin ({ code }: any): BaseResponeObj {
    return { }
  }

  @checkToken()
  static getUserInfo ({ userId }: TokenRequestObj | any): BaseResponeObj {
    return {}
  }
}
export default UserService
