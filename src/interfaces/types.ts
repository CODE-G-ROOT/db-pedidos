import { Double, ObjectId } from "mongodb";

export type EstadoPedido = "enviado" | "en proceso" | undefined;

export type Pedido = {
  set_pedido_id: ObjectId;
  price: Double;
  client_name: string;
  client_lastname: string;
  email: string;
  phone: number;
  country: string;
  departament_or_state: string;
  city: string;
  postal_code: string;
  meth_pay: string;
  status: string;
  val_to_pay: Double;
  dirrection: string;
  date_creation: Date;
  last_update: Date;
};