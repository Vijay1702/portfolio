import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  featherMenu,
  featherX,
  featherGithub,
  featherLinkedin,
  featherDownload,
} from '@ng-icons/feather-icons';
import { navLinks, personalInfo } from '../../data/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [
    provideIcons({ featherMenu, featherX, featherGithub, featherLinkedin, featherDownload }),
  ],
})
export class NavbarComponent {
  navLinks = navLinks;
  personalInfo = personalInfo;

  isScrolled = signal(false);
  isMenuOpen = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
