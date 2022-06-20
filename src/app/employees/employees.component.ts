import { Employee } from './employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  selectedEmployee!: Employee;
  
  constructor() { }

  ngOnInit(): void {
  }

}
