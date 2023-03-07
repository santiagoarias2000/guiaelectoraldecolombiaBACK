import { SQL_DETAILS_ESPECIFICS_CAMARA } from '../../repository/camara/sql_details_especifics_camara';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class CircuncripcionTerritorialCamara extends ListDao{

    public getMeListCircuncripcionTerritorialCamara(req:Request,res: Response):void{
        CircuncripcionTerritorialCamara.getInfo(SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_TERRITORIAL_CAMARA_DEPARTAMENTO,[],res);
    }
    public getMeListCircuncripcionTerritorialCamaraDepartamento(req: Request, res: Response): void {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        
        CircuncripcionTerritorialCamara.getInfoEspecific( SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_TERRITORIAL_CAMARA_DEPARTAMENTO, parametro, res );
      }
      public getMeListCircuncripcionTerritorialCamaraDepartamentoMunicipio(req: Request, res: Response): void {
        const id_department = req.params.idDepartment;
        const id_municipality=req.params.idMunicipality;
        const parametro = [id_department,id_municipality];
        
        CircuncripcionTerritorialCamara.getInfoEspecific( SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_TERRITORIAL_CAMARA_DEPARTAMENTO_MUNICIPIO, parametro, res );
      }

}
const circuncripcionTerritorialCamara = new CircuncripcionTerritorialCamara();
export default circuncripcionTerritorialCamara;