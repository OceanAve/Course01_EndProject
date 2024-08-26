import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientsComponent } from "./clients/clients.component";
import { ClientMeetingsComponent } from "./client-meetings/client-meetings.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, ClientsComponent, ClientMeetingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CMA';
  name: string = "Igor";
  isDisabled: boolean = true;
  message: string = ""

  saveMessage: string = "";
  onSave(): void {
    this.saveMessage = "Message Saved";
  console.log("Saved");
}

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }
}
