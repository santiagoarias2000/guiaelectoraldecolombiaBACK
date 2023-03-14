"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PresidenciaSegunda_1 = __importDefault(require("../controller/presidencia/PresidenciaSegunda"));
const PresidenciaPrimer_1 = __importDefault(require("../controller/presidencia/PresidenciaPrimer"));
class PresidenciaRoutes {
    constructor() {
        this.routesApiPresidencia = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiPresidencia.get("/presidenciaPrimer", PresidenciaPrimer_1.default.getMePresidenciaPrimer);
        this.routesApiPresidencia.get("/presidenciaSegunda", PresidenciaSegunda_1.default.getMePresidenciaSegunda);
    }
}
const presidenciaRoutes = new PresidenciaRoutes();
exports.default = presidenciaRoutes.routesApiPresidencia;
