import { Injectable } from '@angular/core';
import { Proyecto } from '@models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyecto_activo: Proyecto = new Proyecto();
  proyectos: Proyecto[] = []
  constructor() {
    this.ver()
  }
  agregar(proyecto: Proyecto): void {
    this.proyectos.push({ ...proyecto, _id: new Date().getTime() });
    localStorage.setItem('proyectos', JSON.stringify(this.proyectos));
  }
  actualizar(proyecto: Proyecto): void {
    this.proyectos = this.proyectos.filter(t => t._id !== proyecto._id);
    this.proyectos.push({ ...proyecto });
    localStorage.setItem('proyectos', JSON.stringify(this.proyectos));
  }
  eliminar(clave: number): void {
    this.proyectos = this.proyectos.filter(t => t._id !== clave);
    localStorage.setItem('proyectos', JSON.stringify(this.proyectos));
  }
  ver(): void {
    this.proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
  }
}
