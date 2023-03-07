import { SQL_DEPARTMENT } from './../../repository/departamento/sql_list_departamento';
import { Request, Response } from "express";
import { SQL_MUNICIPIO } from "./../../repository/municipio/sql_list_municipio";
import ListDao from "../../dao/ListDao";

class DepartamentoController extends ListDao {

  public getMeListDepartment(req: Request, res: Response): void {
    const id_department = req.params.idDepartment;
    const parametro = [id_department];
    DepartamentoController.getInfo( SQL_DEPARTMENT.LIST_DEPARTMENT, parametro, res );
  }
}
const departamentoController = new DepartamentoController();
export default departamentoController;
