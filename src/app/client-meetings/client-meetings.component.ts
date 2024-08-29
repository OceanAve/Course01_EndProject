import { Component } from '@angular/core';
import { ClientMeetings } from '../models/client-meetings';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-client-meetings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-meetings.component.html',
  styleUrl: './client-meetings.component.css'
})
export class ClientMeetingsComponent {
  clientMeeting: ClientMeetings[] = [];
  ngOnInit(): void {
    this.clientMeeting = [
      {
        client_id: 1,
        meeting_id: 1,
        meeting_date: '2018-02-01',
        meeting_time: '10:00',
        meeting_location: 'ABC'
      },
      {
        client_id: 3,
        meeting_id: 2,
        meeting_date: '2018-02-01',
        meeting_time: '11:00',
        meeting_location: 'ABC'
      },
      {
        client_id: 6,
        meeting_id: 3,
        meeting_date: '2018-02-01',
        meeting_time: '12:00',
        meeting_location: 'Conference Room 1'
      },
      {
        client_id: 1,
        meeting_id: 4,
        meeting_date: '2018-02-01',
        meeting_time: '13:00',
        meeting_location: 'Zoom'
      }
    ];
  }
}
