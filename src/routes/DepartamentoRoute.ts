import { Router } from "express";
import departamentoController from "../controller/deparment/DepartamentoController";

class DepartmentRoutes {
    public routeApiDepartamento : Router;
    constructor() {
        this.routeApiDepartamento = Router();
        this.setting();
    }
    public setting() {
        this.routeApiDepartamento.get("/:idDepartment",departamentoController.getMeListDepartment);
    }
}
const departmentRoutes = new DepartmentRoutes();
export default departmentRoutes.routeApiDepartamento;