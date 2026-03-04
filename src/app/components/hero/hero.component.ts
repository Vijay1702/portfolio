import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  featherArrowDown,
  featherGithub,
  featherLinkedin,
  featherMail,
} from '@ng-icons/feather-icons';
import { personalInfo } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  providers: [provideIcons({ featherArrowDown, featherGithub, featherLinkedin, featherMail })],
})
export class HeroComponent {
  personalInfo = personalInfo;
}
