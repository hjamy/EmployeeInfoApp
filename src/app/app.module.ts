import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmpolyeeListComponent } from './employees/empolyee-list/empolyee-list.component';
import { IndividualEmployeeComponent } from './employees/empolyee-list/individual-employee/individual-employee.component';
import { EmpolyeeDetailComponent } from './employees/empolyee-detail/empolyee-detail.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EmployerEditComponent } from './employer-list/employer-edit/employer-edit.component';
import { SkillComponent } from './employees/empolyee-detail/skill/skill.component';
import { FormsModule } from '@angular/forms';
import { AgeComponent } from './employees/empolyee-detail/age/age.component';
import { AgepipePipe } from './employees/empolyee-detail/age/agepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EmpolyeeListComponent,
    IndividualEmployeeComponent,
    EmpolyeeDetailComponent,
    EmployerListComponent,
    EmployerEditComponent,
    SkillComponent,
    AgeComponent,
    AgepipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
