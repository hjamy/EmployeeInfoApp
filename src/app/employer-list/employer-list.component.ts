import { Employer } from './../shared/employeer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  employers: Employer[] = [
    new Employer('Rahim', 8),
    new Employer('Karim', 10)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onEmployerAdded(employer: Employer){
    this.employers.push(employer);
  }

}
