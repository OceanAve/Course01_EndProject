import { Component } from '@angular/core';
import { Clients } from '../models/clients';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  client: Clients[] = [];
  ngOnInit(): void {
    this.client = [
      {
        client_id: 1,
        companyName: "abc",
        streetAddress1: "123 Main St.",
        streetAddress2: "Suite 230",
        city: "Los Angeles",
        state: "CA",
        zip: "912546",
        firstName: "Jimmy",
        lastName: "Smith",
        email: "john@ABC.com",
        busPhone: "3232541526",
        mobilePhone: "3232541526",
      },
      {
        client_id: 2,
        companyName: "abc",
        streetAddress1: "123 Main St.",
        streetAddress2: "Suite 230",
        city: "Los Angeles",
        state: "CA",
        zip: "912546",
        firstName: "Jimmy",
        lastName: "Smith",
        email: "john@ABC.com",
        busPhone: "3232541526",
        mobilePhone: "3232541526",
      },
      {
        client_id: 3,
        companyName: "abc",
        streetAddress1: "123 Main St.",
        streetAddress2: "Suite 230",
        city: "Los Angeles",
        state: "CA",
        zip: "912546",
        firstName: "Jimmy",
        lastName: "Smith",
        email: "john@ABC.com",
        busPhone: "3232541526",
        mobilePhone: "3232541526",
      },
      {
        client_id: 4,
        companyName: "abc",
        streetAddress1: "123 Main St.",
        streetAddress2: "Suite 230",
        city: "Los Angeles",
        state: "CA",
        zip: "912546",
        firstName: "Jimmy",
        lastName: "Smith",
        email: "john@ABC.com",
        busPhone: "3232541526",
        mobilePhone: "3232541526",
      }
    ]
  }
}
