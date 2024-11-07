import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isLoader: boolean = true;
  categoryList = ['Biryani', 'Shakes', 'Breakfast', 'Waffle', 'Cakes','Choclates'];
  productList = [
    { productId: 1, rating: 3, isOffer: false, productName: 'Vegetable Biryani', category: 'Biryani', price: 100, discount: 2, availableQty: 3, imageUrl: 'assets/vegetable.jpeg' },
    { productId: 2, rating: 1, isOffer: false, productName: 'Chicken Biryani', category: 'Biryani', price: 12, discount: 2, availableQty: 0, imageUrl: 'assets/chicken-biryani.jpeg' },
    { productId: 3, rating: 2, isOffer: true, productName: 'Paneer Tikka Biryani', category: 'Biryani', price: 34, discount: 3, availableQty: 5, imageUrl: 'assets/ptb.jpeg' },
    { productId: 4, rating: 5, isOffer: false, productName: 'Choclate Milk Shake', category: 'Shakes', price: 76, discount: 5, availableQty: 0, imageUrl: 'assets/choc-shake.jpeg' },
    { productId: 5, rating: 3, isOffer: true, productName: 'Vanilla Milk Shake', category: 'Shakes', price: 57, discount: 6, availableQty: 2, imageUrl: 'assets/vanilla.jpeg' },
    { productId: 6, rating: 1, isOffer: false, productName: 'Dosa', category: 'Breakfast', price: 12, discount: 2, availableQty: 8, imageUrl: 'assets/dosa.jpeg' },
    { productId: 7, rating: 3, isOffer: true, productName: 'Hersheys Choclates', category: 'Choclates', price: 34, discount: 5, availableQty: 3, imageUrl: 'assets/cho.jpeg' },
    { productId: 8, rating: 2, isOffer: false, productName: 'Snickers', category: 'Choclates', price: 23, discount: 6, availableQty: 0, imageUrl: 'assets/snick.jpeg' },
    { productId: 9, rating: 5, isOffer: true, productName: 'Nutella Waffle', category: 'Waffle', price: 43, discount: 2, availableQty: 1, imageUrl: 'assets/nutella.jpeg' },
    { productId: 10, rating: 1, isOffer: false, productName: 'Choclate Cake', category: 'Cakes', price: 30, discount: 3, availableQty: 2, imageUrl: 'assets/cakechoc.jpeg' },
    { productId: 11, rating: 2, isOffer: false, productName: 'Vada', category: 'Breakfast', price: 57, discount: 2, availableQty: 4, imageUrl: 'assets/vada.jpeg' },
    { productId: 12, rating: 4, isOffer: true, productName: 'Strawberry Cake', category: 'Cakes', price: 35, discount: 5, availableQty: 7, imageUrl: 'assets/cake.jpeg' },
    { productId: 13, rating: 3, isOffer: false, productName: 'RedVelvet Waffle', category: 'Waffle', price: 32, discount: 6, availableQty: 2, imageUrl: 'assets/redvelvet.jpeg' },
    { productId: 14, rating: 2, isOffer: false, productName: 'Special Mirchi Biryani', category: 'Biryani', price: 67, discount: 15, availableQty: 8, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fNV2e29j3GWdJxMxRnTKPACdLSTDrpT0gA&s' }
  ]
  filteredProducts: any []=[];
  selectedCategory: string = '';
  constructor(){
    setTimeout(() => {
      this.isLoader = false;
    }, 1000);
    this.filteredProducts =  this.productList;
  }

  filterCategor(category: string) {
    this.isLoader = true;
    if(this.selectedCategory == category) {
      this.selectedCategory = '';
      this.filteredProducts = this.productList;
    } else {
      this.selectedCategory = category;
      const products = this.productList.filter( prod=> prod.category == category);
      this.filteredProducts = products;
    } 
    setTimeout(() => {
      this.isLoader = false;
    }, 500);
  }
}
 