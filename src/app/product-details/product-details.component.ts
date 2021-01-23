import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // Representa al producto actual.
  product;

  constructor(
    private route: ActivatedRoute,
    private cartServices: CartService
  ) { }

  ngOnInit(): void {
  // obtiene los parámetros pasados mediante la URL
  const routeParams = this.route.snapshot.paramMap;
  // obtiene el id pasado mediante la URL con el nombre 'productId' y lo transforma en Numero
  const productIdFromRoute = Number(routeParams.get('productId'));

  /*realiza una búsqueda en el arreglo Products con el id que se obtuvo mediante la URL, 
  para obtener el producto y guardarlo en la variable product */
  this.product = products.find(product => product.id === productIdFromRoute);

  }

  // Agrega el producto actual al carrito.
  addToCart(){
    this.cartServices.addToCart(this.product);
    window.alert('Your product has been added to the cart!');
  }



}
