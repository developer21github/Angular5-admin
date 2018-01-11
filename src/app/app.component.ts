import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public herf: any = '';
    public loginT: any = true;

    constructor(private toastr: ToastrService,
                private router: Router,
                private location: Location) {
        router.events.subscribe((val) => {
            if (location.path() != '') {
                this.herf = location.path();
                if (this.herf === '/login') {
                    this.loginT = false;
                }
            } else {
                this.router.navigate(['/login']);
            }
        });
    }

    ngOnInit() {
        /* this.herf=this.router.url;
         console.log(this.herf);
         console.log(this.router.url);
         if(this.herf=='/login'){
         this.toastr.success('app01 has been added successfully.', 'success');
         this.loginT=false;
         }*/
    }

    title = 'app';


}
