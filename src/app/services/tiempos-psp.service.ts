import { Injectable } from '@angular/core';
import { TiemposPSP } from '@models/tiempos-psp';
import { ProyectosService } from './proyectos.service';

@Injectable({
  providedIn: 'root'
})
export class TiemposPSPService {
  tiempos: TiemposPSP[] = []
  tiempos_activos: TiemposPSP[] = []
  constructor(private _proyectos: ProyectosService) {
    this.ver()
  }

  agregar(tiempo: TiemposPSP): void {
    this.tiempos.push({ ...tiempo });
    localStorage.setItem('tiempos', JSON.stringify(this.tiempos));
  }
  actualizar(tiempo: TiemposPSP): void {
    this.tiempos = this.tiempos.filter(t => t._id !== tiempo._id);
    this.tiempos.push({ ...tiempo });
    localStorage.setItem('tiempos', JSON.stringify(this.tiempos));
  }
  eliminar(clave: number): void {
    this.tiempos = this.tiempos.filter(t => t._id !== clave);
    localStorage.setItem('tiempos', JSON.stringify(this.tiempos));
  }
  ver(): void {
    this.tiempos = JSON.parse(localStorage.getItem('tiempos')) || [];
  }
  activar(proyecto: number): void {
    this.tiempos_activos = this.tiempos.filter(t => t._proyecto === proyecto)
  }
  agregar_activo(): void {
    const t: TiemposPSP = Object.assign({ _proyecto: this._proyectos.proyecto_activo._id, _id: new Date().getTime() + "-" + this.tiempos_activos.length + 1 }) as TiemposPSP
    this.tiempos_activos.push({ ...t });
  }
  eliminar_activo(clave: number): void {
    this.tiempos_activos = this.tiempos_activos.filter(t => t._id !== clave);
  }
}
