import { Component } from '@angular/core';
import { ProyectosService } from '@services/proyectos.service';
import { Proyecto } from '@models/proyecto';
import { NgForm } from '@angular/forms';
import { TiemposPSPService } from '@services/tiempos-psp.service';
import { DefectosService } from '@services/defectos.service';
declare const $: any;
declare const moment: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _proyectos: ProyectosService, public _tiempos: TiemposPSPService, public _defectos: DefectosService) {
    this._proyectos.ver();
  }
  goEliminar(p: Proyecto) {
    if (p._id) {
      this._proyectos.proyecto_activo = Object.assign({}, new Proyecto())
      this._proyectos.eliminar(p._id)
    }
  }
  goChange(selectProyecto: number) {
    const p: Proyecto = this._proyectos.proyectos.find(pro => pro._id == selectProyecto)
    if (p) {
      this._tiempos.activar(p._id)
      this._defectos.activar(p._id)
    }
    this.goFormulario(p)
  }
  goFormulario(p?: Proyecto) {
    this._proyectos.proyecto_activo = Object.assign(p ? p : {}, new Proyecto())
  }
  goLimpiar() {
    this._proyectos.proyecto_activo = Object.assign({}, new Proyecto())
  }
  onSubmit(form: NgForm) {
    if (!form.valid) return
    if (this._proyectos.proyecto_activo._id) {
      this._proyectos.actualizar({ ...form.value as Proyecto, _id: this._proyectos.proyecto_activo._id })
    } else {
      this._proyectos.agregar(form.value as Proyecto)
    }
    $('#proyectoModal').modal('hide')
  }
  guardarTiempos() {
    this._tiempos.tiempos = this._tiempos.tiempos.filter(t => t._proyecto != this._proyectos.proyecto_activo._id)
    if (this._tiempos.tiempos_activos.length == 0) {
      if (this._tiempos.tiempos.length == 0) {
        localStorage.setItem('tiempos', "[]")
      }
    } else {
      for (const t of this._tiempos.tiempos_activos) {
        this._tiempos.actualizar(t)
      }
    }
  }
  guardarDefectos() {
    this._defectos.defectos = this._defectos.defectos.filter(t => t._proyecto != this._proyectos.proyecto_activo._id)
    if (this._defectos.defectos_activos.length == 0) {
      if (this._defectos.defectos.length == 0) {
        localStorage.setItem('defectos', "[]")
      }
    } else {
      for (const t of this._defectos.defectos_activos) {
        this._defectos.actualizar(t)
      }
    }
  }
  calculaDelta(clave: number, inicio: string, termino: string) {
    if (!inicio || !termino) return
    let tiempo = this._tiempos.tiempos_activos.find(t => t._id == clave)
    this._tiempos.tiempos_activos = this._tiempos.tiempos_activos.filter(t => t._id != clave)
    const i = moment(inicio)
    const t = moment(termino)
    const dif = t.diff(i, "minutes")
    if (tiempo.tiempo_interupcion) {
      tiempo = { ...tiempo, tiempo_delta: dif + tiempo.tiempo_interupcion }
    } else {
      tiempo = { ...tiempo, tiempo_delta: dif }
    }
    this._tiempos.tiempos_activos.push(tiempo)
  }
  calculaCompostura(clave: number, inicio: string, termino: string) {
    if (!inicio || !termino) return
    let defecto = this._defectos.defectos_activos.find(t => t._id == clave)
    this._defectos.defectos_activos = this._defectos.defectos_activos.filter(t => t._id != clave)
    const i = moment(inicio, "HH:mm")
    const t = moment(termino, "HH:mm")
    const dif = t.diff(i, "minutes")
    defecto = { ...defecto, tiempo_compostura: dif }
    this._defectos.defectos_activos.push(defecto)
  }
  obtenerTipo(a: string) {
    if (!a) return { inicio: '0000-00-00', termino: '0000-00-00' }
    const tipo = this._tiempos.tiempos_activos.find(t => t.fase == a)
    return tipo ? tipo : { inicio: '0000-00-00', termino: '0000-00-00' }
  }
}
