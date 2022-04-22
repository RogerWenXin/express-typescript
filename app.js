"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./src/common/db"));
const garden_route_1 = __importDefault(require("./src/routes/garden.route"));
const app = (0, express_1.default)();
const port = 8200;
app.use(express_1.default.json());
(0, garden_route_1.default)(app);
console.log(process.env.NODE_ENV);
db_1.default.getConnection().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}).catch(e => console.error(e));
