import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  featherGithub,
  featherExternalLink,
  featherX,
  featherArrowRight,
} from '@ng-icons/feather-icons';
import { projects } from '../../data/portfolio-data';
import { Project } from '../../models/portfolio.model';
import { TranslateModule } from '@ngx-translate/core';

const FILTERS = [
  { key: 'all', label: 'PROJECTS.FILTER_ALL' },
  { key: 'web', label: 'PROJECTS.FILTER_WEB' },
  { key: 'ai', label: 'PROJECTS.FILTER_AI' },
];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgIconComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [provideIcons({ featherGithub, featherExternalLink, featherX, featherArrowRight })],
})
export class ProjectsComponent {
  filters = FILTERS;
  allProjects = projects;

  activeFilter = signal('all');
  selectedProject = signal<Project | null>(null);

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.allProjects;
    return this.allProjects.filter((p) => p.categories.includes(filter as any));
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

  getFilterCount(key: string) {
    if (key === 'all') return this.allProjects.length;
    return this.allProjects.filter((p) => p.categories.includes(key as any)).length;
  }

  openProject(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }
}
