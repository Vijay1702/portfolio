import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.css',
})
export class AiAssistantComponent {
  isOpen = false;
  userInput = '';
  messages: { role: 'user' | 'assistant'; content: string }[] = [];

  constructor(private readonly translate: TranslateService) {
    this.translate.get('AI_ASSISTANT.WELCOME').subscribe((res) => {
      this.messages.push({ role: 'assistant', content: res });
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ role: 'user', content: this.userInput });
    const input = this.userInput.toLowerCase();
    this.userInput = '';

    // Simulated basic logic
    setTimeout(() => {
      let key = 'AI_ASSISTANT.FALLBACK';

      if (input.includes('contact')) {
        key = 'AI_ASSISTANT.CONTACT_RES';
      } else if (input.includes('skill') || input.includes('tech')) {
        key = 'AI_ASSISTANT.SKILLS_RES';
      }

      this.translate.get(key).subscribe((res) => {
        this.messages.push({ role: 'assistant', content: res });
      });
    }, 1000);
  }
}
