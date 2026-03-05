import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, MagneticDirective],
  template: `
    <!-- <div class="language-switcher">
      <button
        (click)="switchLanguage('en')"
        [class.active]="currentLang === 'en'"
        class="lang-btn"
        appMagnetic
      >
        EN
      </button>
      <span class="sep">/</span>
      <button
        (click)="switchLanguage('jpn')"
        [class.active]="currentLang === 'jpn'"
        class="lang-btn"
        appMagnetic
      >
        JP
      </button>
    </div> -->
  `,
  styles: [
    `
      .language-switcher {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 0.875rem;
      }
      .lang-btn {
        background: none;
        border: none;
        color: var(--text-muted, #cbd5e1);
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        transition: all 0.3s ease;
        border-radius: 4px;
      }
      .lang-btn:hover {
        color: var(--text-primary, #ffffff);
        background: rgba(255, 255, 255, 0.05);
      }
      .lang-btn.active {
        color: var(--accent-primary, #38bdf8);
        background: rgba(56, 189, 248, 0.1);
      }
      .sep {
        color: rgba(255, 255, 255, 0.2);
      }
    `,
  ],
})
export class LanguageSwitcherComponent {
  constructor(private readonly translate: TranslateService) {}

  get currentLang(): string {
    return this.translate.currentLang || 'en';
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
