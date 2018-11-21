// Interface de usuario, cada variable con esta interfaz debe tener los siguientes
// atributos, (para que sea aceptable solo se necesita ID, firstName y phone):

export interface Contact {
  id: number;
  firstName: string;
  lastName?: string;
  gender?: string;
  age?: number;
  address?: string;
  phone: number;
}
