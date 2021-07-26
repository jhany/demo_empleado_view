import { environment } from "../../environments/environment";

export const api = {
    listarDepartamento: environment.apiUrl.concat('/api/listaDepartamento'),
    insertarDepartamento: environment.apiUrl.concat('/api/insertarDepartamento'),
    listarCargo: environment.apiUrl.concat('/api/listaCargo'),
    insertarCargo: environment.apiUrl.concat('/api/insertarCargo'),
    listaEmpleado: environment.apiUrl.concat('/api/listaEmpleado'),
    insertarEmpleado: environment.apiUrl.concat('/api/insertarEmpleado'),
    actualizarEmpleado: environment.apiUrl.concat('/api/actualizarSueldo') 
  };