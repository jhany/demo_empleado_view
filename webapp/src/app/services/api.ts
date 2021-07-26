import { environment } from "../../environments/environment";

export const api = {
    listarDepartamento: environment.apiUrl.concat('/api/listaDepartamento'),
    insertarDepartamento: environment.apiUrl.concat('/api/insertarDepartamento'),
  };