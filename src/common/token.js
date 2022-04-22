"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const makeResponse_1 = require("../routes/makeResponse");
function checkToken() {
    return function (target, methodName, desc) {
        const oMethod = desc.value;
        desc.value = function (...args) {
            let token;
            let inObject = false;
            if (args[0] && typeof args[0] === 'object') {
                token = args[0].token;
                inObject = true;
            }
            else {
                token = args[0];
            }
            const valid = { valid: token === '1111', userId: '11111' };
            if (valid.valid) {
                if (inObject) {
                    args[0].userId = valid.userId;
                }
                else {
                    args[0] = valid.userId;
                }
                return oMethod.apply(this, args);
            }
            else {
                return makeResponse_1.ERROR_MESSAGE.tokenInvalid;
            }
        };
    };
}
exports.checkToken = checkToken;
