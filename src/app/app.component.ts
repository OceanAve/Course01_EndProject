import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { ClientsComponent } from "./clients/clients.component";
import { ClientMeetingsComponent } from "./client-meetings/client-meetings.component";
import { ProjectsComponent } from "./projects/projects.component";
import { LoginComponent } from "./login/login.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, FormsModule, ClientsComponent, ClientMeetingsComponent, ProjectsComponent, LoginComponent, SideBarComponent, DashboardComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  
export class AppComponent {
  title = 'CMA';

  authenticated: boolean = false;

  onAuthenticated(authenticated: boolean): void {
    this.authenticated = authenticated;
  }
}
