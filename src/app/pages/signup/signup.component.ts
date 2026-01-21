import { Component } from '@angular/core';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { Router, RouterLink } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { toast } from 'ngx-sonner';
import {NgClass} from '@angular/common';


@Component({
  selector: 'app-signup',
  imports: [
    HlmButtonDirective,

    HlmLabelDirective,

    HlmInputDirective,

    HlmSeparatorDirective,

    BrnSeparatorComponent,

    HlmFormFieldModule,
    HlmCheckboxComponent,
    NgClass,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }

    this.signUpForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      acceptTerms: new FormControl(false, [Validators.requiredTrue]),
    })
  }

  get f() { return this.signUpForm.controls; }

  set f(data: { [key: string]: any }) {
    Object.keys(data).forEach((key) => {
      if (this.signUpForm.controls[key]) {
        this.signUpForm.controls[key].setValue(data[key]);
      }
    });
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signUpForm.value);

    this.loading = true;
    setTimeout(() => this.authService.register(this.f['name'].value, this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: (_) => {
          toast.success('Registration successful. Please login.');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          toast.error(err.message || 'Registration failed. Please try again.');
          this.loading = false;
          if (err.status === 409) this.f = { email: "" };
        }
      }), 3000)
  }
}
