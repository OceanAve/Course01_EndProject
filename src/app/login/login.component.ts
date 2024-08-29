import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import {ToastrService } from 'ngx-toastr';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output()
  userAuthenticated = new EventEmitter<boolean>();
  
  // constructor(private toastr: ToastrService) { };

  onSubmit(login: Login): void {

    console.log("Login submitted", JSON.stringify(login));

    this.userAuthenticated.emit(true);
    // this.toastr.success('Login Successful', 'CMA Login');
  }

}
