import { Pipe, PipeTransform } from '@angular/core';
import { TiemposPSP } from '@models/tiempos-psp';

@Pipe({
  name: 'totalTiempo'
})
export class TotalTiempoPipe implements PipeTransform {

  transform(value: TiemposPSP[], ...args: any[]): any {
    if (!value || value.length <= 0) return []
    return value.reduce((b, a) => {
      return b += a.tiempo_delta
    }, 0)
  }

}
