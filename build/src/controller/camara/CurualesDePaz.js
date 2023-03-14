"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class CurualesDePaz extends ListDao_1.default {
    getMeListCurualesDePaz(req, res) {
        //CurualesDePaz.getInfo(SQL_DETAILS_ESPECIFICS_CAMARA.CURULES_DE_PAZ_CAMARA,[],res);
    }
}
const curualesDePaz = new CurualesDePaz();
exports.default = curualesDePaz;
