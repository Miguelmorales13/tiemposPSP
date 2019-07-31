import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenDefectos'
})
export class OrdenDefectosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
