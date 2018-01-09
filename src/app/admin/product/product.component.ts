import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ProductService} from './product.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


    product:any={};

    constructor(private toastr: ToastrService,
                private productService: ProductService,
                private router: Router) {
    }

    ngOnInit() {
    }

    addProduct(product) {
        this.productService.addProduct(product).subscribe(res => {
                this.toastr.success('product has been added successfully.', 'success');
                this.router.navigateByUrl('/product/index-product');
            },
            error => console.log(error)
        );
    }

    cancelProduct(){
        this.router.navigateByUrl('/product/index-product');
    }
}
