import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agepipe'
})

export class AgepipePipe implements PipeTransform {

  
  transform(value: any): any {

    
    let today = new Date().getFullYear();
    let userDay = new Date(value).getFullYear();
    let age = today - userDay;
    return age;

    // var ageDifMs = Date.now() - value.getTime();
    // var ageDate = new Date(ageDifMs); // miliseconds from epoch
    // return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
