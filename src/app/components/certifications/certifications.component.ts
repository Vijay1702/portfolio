import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { certifications } from '../../data/portfolio-data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
})
export class CertificationsComponent {
  certifications = certifications;
}
