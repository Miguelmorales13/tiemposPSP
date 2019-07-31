import { Pipe, PipeTransform } from '@angular/core';
import { Defecto } from '@models/defecto';
declare var moment: any;
@Pipe({
  name: 'defectos'
})
export class DefectosPipe implements PipeTransform {
  transform(value: Defecto[], ...args: any[]): any[] {
    if (!value || value.length <= 0) return [];
    const formato = "yyyy-MM-dd HH:mm"
    let planificacion = value.filter(d => moment(moment(d.fecha + " " + d.encontrado), formato).isBetween(args[0].inicio, args[0].termino)).reduce((b, a) => {
      return b += a.tiempo_compostura
    }, 0);
    let codificacion = value.filter(d => moment(moment(d.fecha + " " + d.encontrado), formato).isBetween(args[1].inicio, args[1].termino)).reduce((b, a) => {
      return b += a.tiempo_compostura
    }, 0)
    let diseno = value.filter(d => moment(moment(d.fecha + " " + d.encontrado), formato).isBetween(args[2].inicio, args[2].termino)).reduce((b, a) => {
      return b += a.tiempo_compostura
    }, 0);
    let compilacion = value.filter(d => moment(moment(d.fecha + " " + d.encontrado), formato).isBetween(args[3].inicio, args[3].termino)).reduce((b, a) => {
      return b += a.tiempo_compostura
    }, 0);
    let pruebas = value.filter(d => moment(moment(d.fecha + " " + d.encontrado), formato).isBetween(args[4].inicio, args[4].termino)).reduce((b, a) => {
      return b += a.tiempo_compostura
    }, 0);
    let posmortem = value.filter(d => moment(moment(d.fecha + " " + d.encontrado), formato).isBetween(args[5].inicio, args[5].termino)).reduce((b, a) => {
      return b += a.tiempo_compostura
    }, 0);
    let res = []
    let total = 0;
    if (planificacion > 0) {
      res = [...res, {
        fase: "Planificacion",
        real: planificacion,
        inicio: args[0].inicio,
        termino: args[0].termino
      },]
      total += planificacion;
    }
    if (codificacion > 0) {
      res = [...res, {
        fase: "Codificacion",
        real: codificacion,
        inicio: args[1].inicio,
        termino: args[1].termino
      },]
      total += codificacion;
    }
    if (diseno > 0) {
      res = [...res, {
        fase: "Diseño",
        real: diseno,
        inicio: args[2].inicio,
        termino: args[2].termino
      },]
      total += diseno;
    }
    if (compilacion > 0) {
      res = [...res, {
        fase: "Compilacion",
        real: compilacion,
        inicio: args[3].inicio,
        termino: args[3].termino
      },]
      total += compilacion;
    }
    if (pruebas > 0) {
      res = [...res, {
        fase: "Pruebas",
        real: pruebas,
        inicio: args[4].inicio,
        termino: args[4].termino
      },]
      total += pruebas;
    }
    if (posmortem > 0) {
      res = [...res, {
        fase: "Posmortem",
        real: posmortem,
        inicio: args[5].inicio,
        termino: args[5].termino
      },]
      total += posmortem;
    }
    return [...res, {
      fase: "Total",
      real: total,
      inicio: 0,
      termino: 0
    }];
  }
}
