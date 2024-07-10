import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-line',
  standalone: true,
  imports: [],
  templateUrl: './user-line.component.html',
  styleUrl: './user-line.component.scss'
})
export class UserLineComponent implements OnInit {

  @Input('user') user!: User;

  constructor(
    private router: Router,
    private userService: UserService
  ){}

  ngOnInit(): void {
  }

  getInfo(){
    this.router.navigate(['user-det', this.user.personal_data.nif])
  }

  editUser(){
    this.router.navigate(['user-mod', this.user.personal_data.nif])
  }

  delUser(){
    this.userService.removeUser(this.user.personal_data.nif);
  }
}