import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from '../../data/portfolio-data';
import { MagneticDirective } from '../../directives/magnetic.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MagneticDirective, TranslateModule],
  template: `
    <section id="expertise" class="services">
      <div class="container">
        <div class="section-header fade-up">
          <span class="section-tag">{{ 'SERVICES.TAG' | translate }}</span>
          <h2 class="section-title">
            {{ 'SERVICES.TITLE_PRE' | translate }}
            <span class="gradient-text">{{ 'SERVICES.TITLE_ACCENT' | translate }}</span>
          </h2>
          <p class="section-subtitle">
            {{ 'SERVICES.SUBTITLE' | translate }}
          </p>
        </div>

        <div class="grid-3">
          <div
            *ngFor="let service of servicesList; let i = index"
            class="service-card card fade-up"
            [style.animation-delay]="i * 0.1 + 's'"
            appMagnetic
          >
            <div class="service-icon-wrapper">
              <span class="service-icon">{{ service.icon }}</span>
            </div>
            <h3 class="service-title">{{ service.title | translate }}</h3>
            <p class="service-desc">{{ service.description | translate }}</p>
            <div class="service-tech">
              <span *ngFor="let t of service.tech" class="tech-pill">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .services {
        background: rgba(255, 255, 255, 0.01);
      }
      .service-card {
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: left;
      }
      .service-icon-wrapper {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        background: rgba(79, 142, 247, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(79, 142, 247, 0.2);
      }
      .service-icon {
        font-size: 2rem;
      }
      .service-title {
        font-size: 1.5rem;
        color: var(--text-primary);
      }
      .service-desc {
        color: var(--text-secondary);
        line-height: 1.6;
        font-size: 0.95rem;
      }
      .service-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: auto;
      }
      .tech-pill {
        font-size: 0.75rem;
        padding: 4px 10px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border);
        border-radius: 6px;
        color: var(--accent-teal);
        font-family: var(--font-mono);
      }
    `,
  ],
})
export class ServicesComponent {
  servicesList = services;
}
