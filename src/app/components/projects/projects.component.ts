import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherGithub, featherExternalLink } from '@ng-icons/feather-icons';
import { projects } from '../../data/portfolio-data';

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: '🌐 Web Dev' },
  { key: 'ai', label: '🤖 AI / ML' },
  { key: 'iot', label: '📡 IoT' },
];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [provideIcons({ featherGithub, featherExternalLink })],
})
export class ProjectsComponent {
  filters = FILTERS;
  allProjects = projects;

  activeFilter = signal('all');

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.allProjects;
    return this.allProjects.filter((p) => p.category === filter);
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

  getFilterCount(key: string) {
    if (key === 'all') return this.allProjects.length;
    return this.allProjects.filter((p) => p.category === key).length;
  }
}
