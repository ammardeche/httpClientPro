import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../model/products'; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductserviceService } from '../../services/productservice.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  currentProduct!: IProducts ; 
   selectedId!: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductserviceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.productService.getProductById(params.get('id'))
      })).subscribe(prod=>{
        this.currentProduct = prod;
      })
  }; 
}
