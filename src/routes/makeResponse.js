"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_MESSAGE = exports.makeResponse = void 0;
function makeResponse(res, data) {
    if (!data.code) {
        data.code = 0;
    }
    return res.header('Access-Control-Allow-Origin', '*')
        .header('Access-Control-Allow-Methods', 'post')
        .header('Access-Control-Allow-Headers', 'x-requested-with,content-type')
        .json(data);
}
exports.makeResponse = makeResponse;
const ERROR_MESSAGE = {
    tokenInvalid: { code: 300, msg: '登录失效' }
};
exports.ERROR_MESSAGE = ERROR_MESSAGE;
