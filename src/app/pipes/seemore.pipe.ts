import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(productDesc: string,count:number,flag:boolean): string {
    let x = ''
    flag ? x = "":""
    return`${x}${productDesc?.split(/\s/).slice(0,count).join(" ")}`
  }

}
