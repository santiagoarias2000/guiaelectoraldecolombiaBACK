"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DepartamentoController_1 = __importDefault(require("../controller/deparment/DepartamentoController"));
class DepartmentRoutes {
    constructor() {
        this.routeApiDepartamento = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routeApiDepartamento.get("/:idDepartment", DepartamentoController_1.default.getMeListDepartment);
    }
}
const departmentRoutes = new DepartmentRoutes();
exports.default = departmentRoutes.routeApiDepartamento;
