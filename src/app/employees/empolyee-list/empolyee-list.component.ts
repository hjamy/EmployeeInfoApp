import { Employee } from './../employee.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empolyee-list',
  templateUrl: './empolyee-list.component.html',
  styleUrls: ['./empolyee-list.component.css']
})
export class EmpolyeeListComponent implements OnInit {

  @Output() employeeWasSelected = new EventEmitter<Employee>();

  employees: Employee[] = [
    new Employee('Hasanath Jamy', 'AUST', 'https://i.ibb.co/6RcTJ2m/Hasanath-Jamy.jpg', 2),
    new Employee('Rezwan Ahmed', 'AUST', 'https://i.ibb.co/5B9mDXK/Khandaker-Rezwan-Ahmed.jpg', 6),
    new Employee('Muntaha Islam', 'BRAC', 'https://i.ibb.co/0B45PpT/Md-Muntaha-Islam.jpg', 3),
  ]
  
  mostExperienced = this.getMostExperiencedEmployee()

  getMostExperiencedEmployee(){
    let employeesCopy = [...this.employees];
    return employeesCopy.sort((current, next) => next.exp - current.exp)[0];
  }
  constructor() { }

  ngOnInit(): void {
  }

  onEmployeeSelected(employee: Employee){
    this.employeeWasSelected.emit(employee);
  }

}
