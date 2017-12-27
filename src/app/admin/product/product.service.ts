import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {

    }

    getProduct(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res);
    }

    addProduct(product): Observable<any> {
        return this.http.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(product));
    }
}
