import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Proveedor } from '../models/proveedor.model';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores: Array<Proveedor> = [ // Datos hardcodeados
    new Proveedor('Gas Natural','A12345678'),
    new Proveedor('Iberdrola', 'A87654321'),
    new Proveedor('Jazztel', 'B12345678'),
    new Proveedor('BBVA', 'C12345678'),
  ]

  clientes: Array<Cliente> = [ // Datos hardcodeados
    {nombre: 'Orange', cif: 'C12345678'},
    {nombre: 'Iberdrola', cif: 'B12345678'},
    {nombre: 'BBVA', cif: 'A12345678'},
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.clientes = [...this.clientes, {nombre: 'Yomvi', cif: 'A5376357'}];
    }, 3000)
  }

}
