import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../../../interfaces/user';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-user-mod',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './user-mod.component.html',
  styleUrl: './user-mod.component.scss'
})
export class UserModComponent implements OnInit{

  public userNif!: string;
  public user!: User;

  constructor(
    private userService: UserService,
    public router: Router,
    private activeRoute: ActivatedRoute,
  ){
    this.activeRoute.params.subscribe((params: Params) => {
      this.userNif = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.userNif && this.userNif != "new") {
      this.user = this.userService.getOneUser(this.userNif)[0];
      let userToPath = this.user as any;
      this.userForm?.patchValue(userToPath);
    }
    else {
      this.studiesFormArray.push(this.getStudy());
      this.workFormArray.push(this.getWork());
    }
  }

  submit(){
    console.log(this.userForm.value)
  }

  public userForm = new FormGroup({
    type: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    personal_data: new FormGroup({
      nif: new FormControl(''),
      name: new FormControl('', Validators.required),
      first_surname: new FormControl('', Validators.required),
      second_surname: new FormControl(''),
      gender: new FormControl(''),
      birth_date: new FormControl('')
    }),
    studies: new FormArray([
      this.getStudy()
    ]),
    work_experience: new FormArray([
      this.getStudy()
    ]),
  })

  public getStudy(){
    return new FormGroup({
      institution_name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
    })
  };

  public getWork(){
    return new FormGroup({
      company_name: new FormControl('', Validators.required),
      job_position: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    })
  }

  get studiesFormArray(): FormArray {
    return this.userForm.controls['studies'] as FormArray;
  }
  get workFormArray(): FormArray {
    return this.userForm.controls['studies'] as FormArray;
  } 

  

  public selectGender(event: any){
    if(event.detail){
      this.userForm.get('personal_data')?.get('gender')?.setValue(event.detail.value)
    }
    else{
      this.userForm.get('personal_data')?.get('gender')?.setValue('')
    }
  }


}
