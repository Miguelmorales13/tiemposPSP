import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenTiempos'
})
export class OrdenTiemposPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
