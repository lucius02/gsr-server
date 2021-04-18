import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'ThirdPipe'})
export class ThirdPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
  }
  }
