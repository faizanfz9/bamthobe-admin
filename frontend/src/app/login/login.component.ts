import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../shared/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router, private authService: AuthService, private spinner: NgxSpinnerService) {}

    ngOnInit() {}

    onLogIn(form: NgForm) {
        let user = {
            email: form.value.email,
            password: form.value.password
        }
        this.spinner.show();
        this.authService.login(user).subscribe((res: any) => {
            this.spinner.hide();
            localStorage.setItem("token", res.token);  
            localStorage.setItem("user", JSON.stringify(res.user));
            this.router.navigate(['/dashboard']);
        });
    }
}
