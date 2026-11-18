export interface User {
  _id?: string;        // lo genera MongoDB
  name?: string;       // no se envía en el login
  lastName?: string;   // no se envía en el login
  email?: string;      // no se envía al cambiar el rol
  password?: string;   // el backend nunca lo devuelve
  role?: string;       // el backend pone 'user' por defecto
}
