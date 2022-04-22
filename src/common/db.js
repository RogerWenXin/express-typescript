"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MongoDB {
    static getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.db) {
                const con = yield mongodb_1.MongoClient.connect('mongodb://localhost:27017/costomization');
                this.db = con.db('costomization');
            }
            return this.db;
        });
    }
    static updateOne({ collection, doc }) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.getConnection();
            return yield db.collection(collection).updateOne(doc, { $unset: true });
        });
    }
}
exports.default = MongoDB;
