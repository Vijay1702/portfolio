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
import { MagneticDirective } from '../../directives/magnetic.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgIconComponent, MagneticDirective, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  providers: [provideIcons({ featherArrowDown, featherGithub, featherLinkedin, featherMail })],
})
export class HeroComponent {
  personalInfo = personalInfo;
}
