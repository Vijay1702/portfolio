import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherGithub, featherLinkedin, featherMail, featherHeart } from '@ng-icons/feather-icons';
import { personalInfo, navLinks } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [provideIcons({ featherGithub, featherLinkedin, featherMail, featherHeart })],
})
export class FooterComponent {
  personalInfo = personalInfo;
  navLinks = navLinks;
  currentYear = new Date().getFullYear();
}
