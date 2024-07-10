import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Demandante, Empleado, User } from '../../interfaces/user';
import { UserLineComponent } from './user-line/user-line.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserLineComponent, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  public usersOrigin!: User[];
  public users!: User[];
  public filterSelected!: any;

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.userService.users$.subscribe(users => {
      this.users = users;
      this.usersOrigin = this.users;
    });
  }

  // FILTRADO
  filter(event: any){ 
    let val = event.target.value;
    if(val){ 
      this.users = this.usersOrigin.filter(user => user.type === val);
    }
    else{
      this.users = this.usersOrigin;
    }
  }

  newUser(){
    this.router.navigate(['user-mod', 'new'])
  }
}
