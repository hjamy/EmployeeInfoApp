import { Birthday } from 'src/app/shared/birthday.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  

  @Input() birthdate!: Birthday;
  @Input() checkEmployeeName!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
