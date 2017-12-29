import {Component, OnInit} from '@angular/core';
import {LocalStorage} from '../../../storage.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    loginData;

    constructor(private localStorage: LocalStorage) {
    }

    ngOnInit() {
        this.loginData = JSON.parse(this.localStorage.getStorage());
    }

}
