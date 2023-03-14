"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DEPARTMENT = void 0;
exports.SQL_DEPARTMENT = {
    LIST_DEPARTMENT: "SELECT dp.id_department,dp.name_department, dp.name_department2 \
    FROM department dp \
    WHERE dp.id_department=$1 \
    ORDER BY dp.name_department ASC",
};
