import { Routes} from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { ClientMeetingsComponent } from './client-meetings/client-meetings.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    { path: '', component: ProjectsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'client-meetings', component: ClientMeetingsComponent },
    // { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];