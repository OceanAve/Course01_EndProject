import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientsComponent } from "./clients/clients.component";
import { ClientMeetingsComponent } from "./client-meetings/client-meetings.component";
import { ProjectsComponent } from "./projects/projects.component";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
import { SideBarComponent } from "./side-bar/side-bar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ClientsComponent, ClientMeetingsComponent, ProjectsComponent, LoginComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CMA';
//   name: string = "Igor";
//   isDisabled: boolean = true;
//   message: string = ""

//   saveMessage: string = "";
//   onSave(): void {
//     this.saveMessage = "Message Saved";
//   console.log("Saved");
// }

  // constructor() {
  //   setTimeout(() => {
  //     this.isDisabled = false;
  //   }, 3000);
  // }
}
