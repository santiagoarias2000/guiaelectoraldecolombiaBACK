import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";
import { SQL_DETAILS_ESPECIFICS_CAMARA } from '../../repository/camara/sql_details_especifics_camara';

class CircuncripcionAfrodecendientesCamara extends ListDao{
    public getMeListCircuncripcionAfroDescendienteCamaraDepartamento(req: Request, res: Response): void {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        
        CircuncripcionAfrodecendientesCamara.getInfoEspecific( SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_AFRODESCENDIENTE_CAMARA_DEPARTAMENTO, parametro, res );
      }
      public getMeListCircuncripcionAfroDescendienteCamaraDepartamentoMunicipio(req: Request, res: Response): void {
        const id_department = req.params.idDepartment;
        const id_municipality=req.params.idMunicipality;
        const parametro = [id_department,id_municipality];
        
        CircuncripcionAfrodecendientesCamara.getInfoEspecific( SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_AFRODESCENDIENTE_CAMARA_DEPARTAMENTO_MUNICIPIO, parametro, res );
      }
    
}
const circuncripcionAfrodecendientesCamara = new CircuncripcionAfrodecendientesCamara();
export default circuncripcionAfrodecendientesCamara;