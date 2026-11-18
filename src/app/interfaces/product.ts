export interface Product {
  _id?: string;        // no se envía al crear: lo genera MongoDB
  name: string;
  price: number;
  description: string;
  imagen: string;
}
