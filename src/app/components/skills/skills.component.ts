import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skills } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = skills;
}
