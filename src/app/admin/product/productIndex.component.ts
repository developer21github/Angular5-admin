import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ProductService} from './product.service';
import {jQuery} from 'jquery/dist/jquery.js';

declare var $:any;
@Component({
    selector: 'app-ProductIndex',
    templateUrl: './productIndex.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductIndexComponent {

    products = {};

    constructor(private toastr: ToastrService,
                private productService: ProductService) {
    }

    ngOnInit() {
        this.getProduct()
    }

    ngAfterViewInit() {
            $("#example1").DataTable();
    }

    getProduct() {
        this.productService.getProduct().subscribe(res => {
                this.products = res;
            },
            error => console.log(error)
        );
    }
}