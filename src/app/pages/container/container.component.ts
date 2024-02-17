import { Component, Input, OnInit, input } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { ProductsComponent } from '../products/products.component';
import { ProductserviceService } from '../../services/productservice.service';
import { IProducts } from '../../model/products';
import { NgFor } from '@angular/common';
import { ICategory } from '../../model/category';
import { ActivatedRoute, RouterModule , Router } from '@angular/router';
// import { TemplatePageTitleStrategy } from '../../template-page-title-strategy';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CategoryComponent, ProductsComponent, NgFor,RouterModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent implements OnInit{
  products!: IProducts[];
  categories!: ICategory[];
  displayAllProducts: IProducts[] = []; // Array for all products
  filteredProducts: IProducts[] = []; // Array for filtered products
  catValue!: any;

  ngOnInit(): void {
    this.fetchProductData();
    this.fetchCategory();

  }
  constructor(private prodService: ProductserviceService , private  route:Router , private router : ActivatedRoute) {}

   navigateToDetails(){
    this.route.navigate(['../details'], {relativeTo : this.router});
   }

  // fetch Data by container component
  fetchProductData() {
    this.prodService.getAllProducts().subscribe((data) => {
      // all products
      this.displayAllProducts = data;
      console.log(this.products);
      // filltred products list
      this.filteredProducts = this.displayAllProducts; 
      console.log('filtred data ' + this.filteredProducts);
    });
  }

  // fetch category data

  fetchCategory() {
    this.prodService.getCategoryData().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  getValue(value: any) {
    this.catValue = value;
    console.log(' this value from container = ' + this.catValue);
    this.filteredProducts = this.displayAllProducts.filter((product)=> product.category.name === this.catValue);
  }
}

