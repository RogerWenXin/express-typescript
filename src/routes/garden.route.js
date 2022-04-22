"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const makeResponse_1 = require("./makeResponse");
const user_service_1 = __importDefault(require("../service/user.service"));
function gardenRoute(app) {
    app.post('/confession/garden-config', (req, res) => {
        (0, makeResponse_1.makeResponse)(res, { code: 0, data: {} });
    });
    app.post('/user/userinfo', (req, res) => {
        try {
            const { token } = req.body;
            (0, makeResponse_1.makeResponse)(res, user_service_1.default.getUserInfo({ token }));
        }
        catch (e) {
            console.error(e);
            (0, makeResponse_1.makeResponse)(res, { code: 500, msg: '服务器出错了' });
        }
    });
}
exports.default = gardenRoute;
