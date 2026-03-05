import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experiences } from '../../data/portfolio-data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences = experiences;
}
