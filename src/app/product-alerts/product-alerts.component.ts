import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // Creando una propiedad del tipo input para recibir datos de otro componente.
  @Input() product;

  // Creando una propiedad del tipo output que recibe un eventEmitter() 
  // para enviar datos a otros componente.
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
