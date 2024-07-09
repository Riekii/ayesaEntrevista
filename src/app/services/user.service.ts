import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demandante, Empleado, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users!: User[]

  constructor(
    private http: HttpClient
  ) {
    this.getUsersLocal();
  }

  // NO CONSEGUÍ RECOGER UN JSON EN ASSETS DESDE UNA PETICIÓN GET, ES ALGO QUE NUNCA TUVE QUE HACER Y DABA FALLOS POR TODAS PARTES
  getUsersLocal(){
    this.http.get("../../../assets/users.json").subscribe((data: any) => {
      this.users = data;
    });
  }

  getUsers(){
    return this.http.get("../../../assets/users.json");
  }

  getUsersNoGet(){
    return this.users;
  }

  // LO IDEAL SERIA BUSCAR POR UN ID DE LA BASE DE DATOS, PERO NO ME DA TIEMPO A VOLVER A GENERAR EL JSON
  getOneUser(nif:string){
    return this.users.filter(user => user.personal_data.nif === nif)
  }

  delUser(nif: string){
    this.users.filter((user: User) => user.personal_data.nif != nif)
  }

}
