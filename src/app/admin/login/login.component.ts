import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorage} from '../../storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login: any = {};
    username = 'admin';
    password = 'admin';

    constructor(private router: Router,
                private localStorage: LocalStorage) {
        debugger;
    }

    ngOnInit() {
    debugger;
    }

    logins(login) {
        if (login.username === this.username && login.password === this.password) {
            this.localStorage.SetStorage(login);
            this.router.navigate(['/home']);
            // console.log(this.localStorage.getStorage());
            location.reload(true);
        }
    }
}
