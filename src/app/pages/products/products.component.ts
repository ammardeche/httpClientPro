import { Component, Input, OnInit, input } from '@angular/core';
import { ProductserviceService } from '../../services/productservice.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { KeyValuePipe } from '@angular/common';
import { IProducts } from '../../model/products';
import { ActivatedRoute, RouterLinkActive, RouterModule , Router, TitleStrategy } from '@angular/router';
import { ShareserviceService } from '../../services/shareservice.service';
import { Title } from '@angular/platform-browser';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor , RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  
  @Input() currentProduct!: IProducts; 
  @Input() catItem : any ; 

  constructor( private shareServ:ShareserviceService , private router : Router , private route : ActivatedRoute , private productser : ProductserviceService) {    
  }


  delete( productId : number ){
    // this.route.paramMap.pipe(
    //   switchMap((params)=>this.productser.getProductById(params.get('id')))
    // ).subscribe(
    //   (product)=>{
    //       this.productser.deleteProduct();
    //   }
    // );
    this.productser.deleteProduct(productId); 
  }

  
  ngOnInit(): void {
  }

}
