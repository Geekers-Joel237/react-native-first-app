import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/product.models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productFormGroup!:FormGroup;
  submitted:boolean= false;
  constructor(private fb: FormBuilder,private productService:ProductsService) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required]
    })
  }

  get name(){return this.productFormGroup.get('name');}

  get price(){return this.productFormGroup.get('price');}

  get quantity(){return this.productFormGroup.get('quantity');}


  onSaveProduct():void{
    this.submitted = true;
    if(this.productFormGroup.invalid) return;
    this.productService.saveProduct(this.productFormGroup.value)
    .subscribe(
      (data)=>{
        console.log(data );
        alert(data);
      },
      (err)=>{
      }
    )
  }

}
