import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
// import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Output()
  userAuthenticated = new EventEmitter<boolean>();

  // constructor(private toastr: ToastrService) { };
  
  onLogout(): void {
    console.log('logout submitted');
    this.userAuthenticated.emit(false);
    // this.toastr.success('Login Successful', 'CMA Login');
  }


}
