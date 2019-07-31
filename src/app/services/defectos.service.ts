import { Injectable } from '@angular/core';
import { Defecto } from '@models/defecto';
import { ProyectosService } from './proyectos.service';

@Injectable({
  providedIn: 'root'
})
export class DefectosService {
  defectos: Defecto[] = []
  defectos_activos: Defecto[] = []
  constructor(private _proyectos: ProyectosService) {
    this.ver()
  }

  agregar(defecto: Defecto): void {
    this.defectos.push({ ...defecto, _id: new Date().getTime() });
    localStorage.setItem('defectos', JSON.stringify(this.defectos));
  }
  actualizar(defecto: Defecto): void {
    this.defectos = this.defectos.filter(t => t._id !== defecto._id);
    this.defectos.push({ ...defecto });
    localStorage.setItem('defectos', JSON.stringify(this.defectos));
  }
  eliminar(clave: number): void {
    this.defectos = this.defectos.filter(t => t._id !== clave);
    localStorage.setItem('defectos', JSON.stringify(this.defectos));
  }
  ver(): void {
    this.defectos = JSON.parse(localStorage.getItem('defectos')) || [];
  }
  activar(proyecto: number): void {
    this.defectos_activos = this.defectos.filter(t => t._proyecto === proyecto)
  }
  agregar_activo(): void {
    const nuevo: Defecto = { ...Object.assign({ _id: new Date().getTime() + "-" + this.defectos_activos.length + 1, numero: this.defectos_activos.length + 1, _proyecto: this._proyectos.proyecto_activo._id }) }
    this.defectos_activos.push({ ...nuevo });
  }
  eliminar_activo(clave: number): void {
    this.defectos_activos = this.defectos_activos.filter(t => t._id !== clave);
  }
}
