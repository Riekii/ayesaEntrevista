import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demandante, Empleado, User } from '../interfaces/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(
    private http: HttpClient
  ) {
    this.getUsersLocal();
  }

  // NO CONSEGUÍ RECOGER UN JSON EN ASSETS DESDE UNA PETICIÓN GET, ES ALGO QUE NUNCA TUVE QUE HACER Y DABA FALLOS POR TODAS PARTES
  getUsersLocal(){
    this.http.get<User[]>("../../../assets/users.json").subscribe((data: User[]) => {
      this.usersSubject.next(data);
    });
  }

  getUsers(){
    return this.usersSubject.value;
  }

  addUser(user: User) {
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, user]);
  }

  updateUser(updatedUser: User) {
    const currentUsers = this.usersSubject.value.map(user =>
      user.personal_data.nif === updatedUser.personal_data.nif ? updatedUser : user
    );
    this.usersSubject.next(currentUsers);
  }

  removeUser(userNif: string) {
    const currentUsers = this.usersSubject.value.filter(user => user.personal_data.nif !== userNif);
    this.usersSubject.next(currentUsers);
  }

  getOneUser(userNif: string) {
    const currentUsers = this.usersSubject.value.filter(user => user.personal_data.nif === userNif);
    return currentUsers;
  }
}
