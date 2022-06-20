import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill!: Skill;
  @Input() checkEmployeeName!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
