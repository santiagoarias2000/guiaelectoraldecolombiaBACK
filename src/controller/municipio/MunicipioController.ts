import { Request, Response } from "express";
import { SQL_MUNICIPIO } from "./../../repository/municipio/sql_list_municipio";
import ListDao from "../../dao/ListDao";

class MunicipioController extends ListDao {

  public getMeListDepartment(req: Request, res: Response): void {
    const id_department = req.params.idDepartment;
    const parametro = [id_department];
    MunicipioController.getInfo( SQL_MUNICIPIO.LIST_MUNICIPIO, parametro, res );
  }

  public getMeMunicipio(req: Request, res: Response): void {
    const id_municipality = req.params.idMunicipality;
    const parametro = [id_municipality];
    MunicipioController.getInfo( SQL_MUNICIPIO.ONE_MUNICIPALITY, parametro, res );
  }
}
const municipioController = new MunicipioController();
export default municipioController;
