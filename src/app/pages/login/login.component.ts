import { Component } from '@angular/core';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { first } from 'rxjs';
import {toast} from 'ngx-sonner';
import {NgClass} from '@angular/common';



@Component({
  selector: 'app-login',
  imports: [
    HlmButtonDirective,

    HlmLabelDirective,

    HlmInputDirective,

    HlmSeparatorDirective,
    HlmFormFieldModule,
    BrnSeparatorComponent,
    NgClass,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  returnUrl: string;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }
  set f(data: { [key: string]: any }) {
    Object.keys(data).forEach((key) => {
      if (this.loginForm.controls[key]) {
        this.loginForm.controls[key].setValue(data[key]);
      }
    });
  }

  onSubmit() {
    // console.warn(this.loginForm.value);

    this.loading = true;

    setTimeout(() => this.authService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: (res) => {
          // console.log(res);
          toast.success('Login successful.');
          this.router.navigate([this.returnUrl]);
        },
        error: (err) => {
          console.log(err);
          
          toast.error(err?.message || 'Login failed. Please try again.');
          this.loading = false;
          if (err.status === 401) this.f = { email: "", password: "" };
        }
      }), 3000)
  }

}
