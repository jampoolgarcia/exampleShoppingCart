import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Lista de items del carrito
  items = [];

  constructor(
    private http: HttpClient
  ) { }


  // Agrega un nuevo producto a la lista de items del carrito.
  addToCart(product){
    this.items.push(product);
  }

  // Devuelve la lista de los productos agregados al carrito.
  getItems(){
    return this.items;
  }

  // Vacía la lista de productos y la devuelve.
  clearCart(){
    this.items = [];
    return this.items;
  }

  // retorna un arreglo con los precios de envio desde un archivo json 
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}
