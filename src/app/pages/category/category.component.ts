import { Component, Input, Output, NgModule, input, EventEmitter } from '@angular/core';
import { ICategory } from '../../model/category';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'; 
import { ShareserviceService } from '../../services/shareservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor ,FormsModule , ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  @Input() category: ICategory[] = []; 
  @Output() eventEmitter = new EventEmitter<any>();


  categoryForm : FormGroup ; 

  constructor( private fb : FormBuilder ) {

    this.categoryForm = fb.group({
          selectedCategory: [''],
    })
    
  }


  onFormSubmit(){
      const selectedValue = this.categoryForm.get('selectedCategory')?.value; 
      this.eventEmitter.emit(selectedValue); 

      console.log('value of category = ' + selectedValue); 
  }


}
