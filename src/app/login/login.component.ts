import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from "./login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public username: String;
    public password: String;
    public isLogin: Boolean = true;
    constructor(public router: Router, private loginService: LoginService) { }

    ngOnInit() { }

    onLoggedin() {
        let data = {
            username: this.username,
            password: this.password
        };

        this.loginService.login(data).subscribe((response: any) => {
            console.log(response);
            localStorage.setItem('isLoggedin', 'true');
            console.log('sad');
            this.router.navigate(['home']);
            this.isLogin = true;

            // var a = localStorage.getItem('isLoggedin');
            // console.log(a);

        }, error => {
            if (error) {
                this.isLogin = false;                
                localStorage.setItem('isLoggedin', 'false');
            }
        })

    }
}
