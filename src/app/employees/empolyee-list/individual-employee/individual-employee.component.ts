import { Employee } from './../../employee.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-individual-employee',
  templateUrl: './individual-employee.component.html',
  styleUrls: ['./individual-employee.component.css']
})
export class IndividualEmployeeComponent implements OnInit {

  @Input() mostExperienced!: Employee;
  @Input() employee!: Employee;
  @Output() employeeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.employeeSelected.emit();
  }

}
