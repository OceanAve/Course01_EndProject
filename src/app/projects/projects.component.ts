import { Component } from '@angular/core';
import { Project } from '../models/project';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
  
export class ProjectsComponent {

  project: Project[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.project = [
      {
        project_id: 1,
        client_id: 1,
        client_name: 'ABC',
        project_name: 'Project 1',
        project_description: 'Project 1 Description', project_due_date: '2018-02-01',
        project_start_date: '2018-01-01',
        project_status: 'Open'
      },
      {
        project_id: 2,
        client_id: 1,
        client_name: 'ABC',
        project_name: 'Project 2',
        project_description: 'Project 2 Description',
        project_start_date: '2018-01-01',
        project_due_date: '2018-02-01',
        project_status: 'Open'
      },
      {
        project_id: 3,
        client_id: 1,
        client_name: 'ABC',
        project_name: 'Project 3',
        project_description: 'Project 3 Description',
        project_start_date : '2018-01-01',
        project_due_date: '2018-02-01',
        project_status: 'Open'
      },
      {
        project_id: 4,
        client_id: 1,
        client_name: 'ABC',
        project_name: 'Project 4',
        project_description: 'Project 4 Description',
        project_start_date: '2018-01-01',
        project_due_date: '2018-02-01',
        project_status: 'Open'
      },
    ];
  }

  onViewClient(id: number): void {
    this.router.navigate(['/clients', id]);
    console.log('Viewing client:'+ id);
  }

}