import { SQL_DETAILS_ESPECIFICS_CAMARA } from './../../repository/camara/sql_details_especifics_camara';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class CircuncripcionIndigenaCamara extends ListDao{
    public getMeListCircuncripcionIndigenaCamaraDepartamento(req: Request, res: Response): void {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        
        CircuncripcionIndigenaCamara.getInfoEspecific( SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_INDIGENA_CAMARA_DEPARTAMENTO, parametro, res );
      }
      public getMeListCircuncripcionIndigenaCamaraDepartamentoMunicipio(req: Request, res: Response): void {
        const id_department = req.params.idDepartment;
        const id_municipality=req.params.idMunicipality;
        const parametro = [id_department,id_municipality];
        
        CircuncripcionIndigenaCamara.getInfoEspecific( SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_INDIGENA_CAMARA_DEPARTAMENTO_MUNICIPIO, parametro, res );
      }

      
}
const circuncripcionIndigenaCamara = new CircuncripcionIndigenaCamara();
export default circuncripcionIndigenaCamara;