import { Employee } from './../employee.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Skill } from 'src/app/shared/skill.model';

@Component({
  selector: 'app-empolyee-detail',
  templateUrl: './empolyee-detail.component.html',
  styleUrls: ['./empolyee-detail.component.css']
})
export class EmpolyeeDetailComponent implements OnInit {

  // employeeName!: string;
  skills: Skill[]=[
    
  ];

  // rezwanSkills: Skill[]=[

  // ];

  // muntahaSkills: Skill[]=[

  // ];

  @ViewChild('skillInput') skillInputRef!: ElementRef;

  @Input() employee!: Employee;
  checkEmployeeName!: string;

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

}
