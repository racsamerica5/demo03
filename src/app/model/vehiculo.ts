import { Propietario } from "./propietario";

export class Vehiculo{
    idVehiculo: number=0;
    licensePlateVehiculo: string="";
    manufacturingDateVehiculo: string="";
    propietario:Propietario=new Propietario();
}