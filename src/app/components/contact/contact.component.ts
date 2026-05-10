import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherMail, featherPhone, featherMapPin, featherSend } from '@ng-icons/feather-icons';
import { personalInfo } from '../../data/portfolio-data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIconComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [provideIcons({ featherMail, featherPhone, featherMapPin, featherSend })],
})
export class ContactComponent {
  personalInfo = personalInfo;
  contactForm: FormGroup;
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.status = 'sending';
      
      try {
        const response = await fetch('https://formsubmit.co/ajax/rvijay1702@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(this.contactForm.value)
        });

        if (response.ok) {
          this.status = 'success';
          this.contactForm.reset();
          setTimeout(() => (this.status = 'idle'), 5000);
        } else {
          this.status = 'error';
          setTimeout(() => (this.status = 'idle'), 5000);
        }
      } catch (error) {
        this.status = 'error';
        setTimeout(() => (this.status = 'idle'), 5000);
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
