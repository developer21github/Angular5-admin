import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login = {};
    username = 'admin';
    password = 'admin';

    constructor(private router: Router) {}

    ngOnInit() {}

    logins(login) {
        if (login.username == this.username && login.password == this.password) {
            this.router.navigate(['/home']);
            location.reload(true);
        }
    }
}
