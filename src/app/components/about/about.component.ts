import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo, education } from '../../data/portfolio-data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  personalInfo = personalInfo;
  education = education;
}
