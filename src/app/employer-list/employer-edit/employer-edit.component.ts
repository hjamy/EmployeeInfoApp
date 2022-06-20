import { Employer } from './../../shared/employeer.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employer-edit',
  templateUrl: './employer-edit.component.html',
  styleUrls: ['./employer-edit.component.css']
})
export class EmployerEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('experienceInput') experienceInputRef!: ElementRef;
  @Output() employerAdded = new EventEmitter<Employer>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddEmployer(){
    const name = this.nameInputRef.nativeElement.value;
    const exp = this.experienceInputRef.nativeElement.value;
    const employer = new Employer(name, exp);

    this.employerAdded.emit(employer);
  }

}
