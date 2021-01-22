import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Creando un objeto de tipo products que representa el contenido de products.ts
  products = products;

  // Método que ejecuta una ventana de alerta.
  share() {
    window.alert('The product has been shared!');
  }

  // Método que ejecuta una ventana de alerta.
  onNotify(){
    window.alert("You will be notified when the product goes on sale");
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
