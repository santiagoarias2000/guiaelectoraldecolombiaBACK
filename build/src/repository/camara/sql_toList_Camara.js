"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TO_LIST_CAMARA = void 0;
exports.SQL_TO_LIST_CAMARA = {
    LIST_CAMARA_DEPARTAMENTO_TERRITORIAL: "SELECT dp.id_department,dp.name_department, vs.description_district,vs.description_role,sum(vs.number_votes) as votos, \
    jsonb_object(array['idDepartment',dp.id_department,'name_department',dp.name_department]::TEXT[]) AS department \
    FROM votes vs \
    INNER JOIN department dp ON dp.id_department = vs.id_department \
    WHERE vs.code_district=1 AND vs.code_role=2 \
    GROUP BY dp.id_department,dp.name_department, vs.description_district, vs.description_role \
    ORDER BY dp.name_department ASC",
    COUNT_CAMARA_DEP_TERR: "SELECT COUNT(dep.id_department) \
    FROM department dep \
    INNER JOIN votes vs ON dep.id_department = vs.id_department \
    GROUP BY dep.id_department",
    LIST_CAMARA_DEPARTAMENTO_INDIGENA: "SELECT dp.id_department,dp.name_department, vs.description_district,vs.description_role,sum(vs.number_votes) as votos, \
    jsonb_object(array['idDepartment',dp.id_department,'name_department',dp.name_department]::TEXT[]) AS department \
    FROM votes vs \
    INNER JOIN department dp ON dp.id_department = vs.id_department \
    WHERE vs.code_district=4 AND vs.code_role=2 \
    GROUP BY dp.id_department,dp.name_department, vs.description_district, vs.description_role \
    ORDER BY dp.name_department ASC",
    LIST_CAMARA_DEPARTAMENTO_AFRO_DESCENDIENTE: "SELECT dp.id_department,dp.name_department, vs.description_district,vs.description_role,sum(vs.number_votes) as votos ,\
    jsonb_object(array['idDepartment',dp.id_department,'name_department',dp.name_department]::TEXT[]) AS department \
    FROM votes vs \
    INNER JOIN department dp ON dp.id_department = vs.id_department \
    WHERE vs.code_district=5 AND vs.code_role=2 \
    GROUP BY dp.id_department,dp.name_department, vs.description_district, vs.description_role \
    ORDER BY dp.name_department ASC",
};
