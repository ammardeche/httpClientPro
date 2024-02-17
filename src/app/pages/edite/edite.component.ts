import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductserviceService } from '../../services/productservice.service';
import { IProducts } from '../../model/products';
import { title } from 'node:process';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edite',
  standalone: true,
  imports: [FormsModule ,ReactiveFormsModule , NgIf],
  templateUrl: './edite.component.html',
  styleUrl: './edite.component.css'
})
export class EditeComponent implements OnInit{

  editForm! : FormGroup; 
  currentProduct! : IProducts; 
  isLoading : boolean = true;

  ngOnInit(): void {

    // 1 - firstly i created a form group of type reactive form and i set the properties
    // 2 - secondly i created a pipe return observable after that i subscribed to it 
    // 3 - finally when  i subscribed i returned a product and i patched these values with edit form properties 

    this.editForm = this.formbuilder.group({
        title : ['' , Validators.required], 
        description : ['' , Validators.required],
        price : ['' , Validators.required]
    }); 

    this.route.paramMap.pipe(switchMap((params)=>this.productserv.getProductById(params.get('id')))).subscribe(
      (product)=>{
        this.currentProduct = product; 

        this.editForm.patchValue({
          title : product.title, 
          description : product.description,
          price : product.price
        })

        this.isLoading = false; 
      }
    )
  }

  constructor(private formbuilder : FormBuilder, private productserv : ProductserviceService, private route : ActivatedRoute,  private router : Router){}

  OnSubmit(){
    if(this.editForm.valid){
          const updateProduct : IProducts =  {
            id: this.currentProduct.id,
            title: this.editForm.value.title,
            description: this.editForm.value.description,
            price: this.editForm.value.price,
            images: this.currentProduct.images, // Assuming these properties exist in currentProduct
            creationAt: this.currentProduct.creationAt,
            updatedAt: new Date(), // You may want to update the updatedAt timestamp
            category: this.currentProduct.category,
            name: '',
            image: ''
          }; 
          this.productserv.updateProduct(updateProduct).subscribe( (data)=>{
            console.log("updated = " + data);
          } )
    }
  }



}
