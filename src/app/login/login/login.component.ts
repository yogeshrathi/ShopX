import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storageService';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)]),
        password: new FormControl(null, Validators.required),
    });

    constructor(
        private loginService: LoginService,
        private router: Router,
        private storageService: StorageService
    ) { }

    ngOnInit(): void {
    }

    login(): void {
        if (this.loginForm.valid) {
            const payload = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password,
            };

            this.loginService.signIn(payload).subscribe((res) => {
                // Todo
                // Show Toastr []
                // save token [x]
                // save encrypted Token
                // console.log('User Loggedin --->', res);
                this.storageService.sessionToken = res.token;
                this.storageService.set('user', JSON.stringify(res));
                this.router.navigate(['/store']);
            });
        } else {
            // Todo
            // [] -- Show Toastr
        }
    }
}
