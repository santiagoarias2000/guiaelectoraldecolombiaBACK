import { Router } from 'express';
import presidenciaSegunda from '../controller/presidencia/PresidenciaSegunda';
import presidenciaPrimer from '../controller/presidencia/PresidenciaPrimer';
class PresidenciaRoutes{
    public routesApiPresidencia: Router;
    constructor(){
        this.routesApiPresidencia = Router();
        this.setting();
    }
    public setting(){
        this.routesApiPresidencia.get("/presidenciaPrimer",presidenciaPrimer.getMePresidenciaPrimer);
        this.routesApiPresidencia.get("/presidenciaSegunda",presidenciaSegunda.getMePresidenciaSegunda);
    }
}
const presidenciaRoutes = new PresidenciaRoutes();
export default presidenciaRoutes.routesApiPresidencia;