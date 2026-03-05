import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent,
    AiAssistantComponent,
    TranslateModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private readonly translate: TranslateService) {
    this.translate.use('en');
  }
}
