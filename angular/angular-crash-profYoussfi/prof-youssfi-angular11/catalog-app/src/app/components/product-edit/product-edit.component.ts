import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productd!:number;
  productFormGroup!:FormGroup;

  constructor(private activatedRoute:ActivatedRoute,
              private productsService:ProductsService,
              private fb:FormBuilder) {
    this.productd = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
     this.productsService.getProduct(this.productd)
    .subscribe(
      (data)=>{

        this.productFormGroup  = this.fb.group({
          id:[data.id,Validators.required],
          name:[data.name,Validators.required],
          price:[data.price,Validators.required],
          quantity:[data.quantity,Validators.required],
          selected:[data.selected,Validators.required],
          available:[data.available,Validators.required],
        })
      }
    )
  }

  onUpdateProduct():void{
    this.productsService.updateProduct(this.productFormGroup.value)
    .subscribe(
      (data)=>{
        alert('Edit Success');
      }
    )
  }
}
