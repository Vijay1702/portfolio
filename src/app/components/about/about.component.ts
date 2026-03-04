import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo, education } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  personalInfo = personalInfo;
  education = education;
}
