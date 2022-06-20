import { Employee } from './../employee.model';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Skill } from 'src/app/shared/skill.model';
import { Birthday } from 'src/app/shared/birthday.model';

@Component({
  selector: 'app-empolyee-detail',
  templateUrl: './empolyee-detail.component.html',
  styleUrls: ['./empolyee-detail.component.css']
})
export class EmpolyeeDetailComponent implements OnInit {

  // employeeName!: string;
  skills: Skill[]=[
    
  ];

  birthdays: Birthday[] = [
    
  ];

  // rezwanSkills: Skill[]=[

  // ];

  // muntahaSkills: Skill[]=[

  // ];

  @ViewChild('skillInput') skillInputRef!: ElementRef;
  @Input() employee!: Employee;
  checkEmployeeName!: string;

  // @Output() selectedAge = new EventEmitter<Birthday>();

  // @Output() ageSelected = new EventEmitter<Birthday>();

  constructor() { }

  ngOnInit(): void {
  }

  onSkillAdded(empName: string){
    const skillName = this.skillInputRef.nativeElement.value;
    const employeeName = empName;
    const skill = new Skill(skillName, employeeName);
    this.skills.push(skill);

    // if(empName === 'Hasanath Jamy'){
    //   this.jamySkills.push(skill);
    // }
    // else if(empName === 'Rezwan Ahmed'){
    //   this.rezwanSkills.push(skill);
    // }
    // else{
    //   this.muntahaSkills.push(skill);
    // }

    this.skillInputRef.nativeElement.value = "";
    this.skillInputRef.nativeElement.focus();
  }

  changed!: Date;

  // SendDataonChange(event: any) {
  //   // console.log(event.target.value);
  // }

  onClick(empName: string) {
    const birthDate = this.changed;
    const employeeName = empName;
    const birthday = new Birthday(employeeName, birthDate);

    // let filteredClasses = this.birthdays.filter(cls => employeeName.includes(cls.empName));
    // if(filteredClasses.length === 0){
    //   this.birthdays.push(birthday);
    // }
    // else{
    //   let filteredClasses = this.birthdays.filter(cls => employeeName.includes(cls.empName));
    //   console.log(filteredClasses);
    // }

      const index = this.birthdays.findIndex(object => {
        return object.empName === empName;
      });
      
      if (index !== -1) {
        this.birthdays[index].day = birthDate;
      }
      else {
        this.birthdays.push(birthday);
      }
  }
}
