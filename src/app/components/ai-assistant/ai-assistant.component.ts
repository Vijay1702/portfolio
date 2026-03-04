import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.css',
})
export class AiAssistantComponent {
  isOpen = false;
  userInput = '';
  messages: { role: 'user' | 'assistant'; content: string }[] = [
    { role: 'assistant', content: "Hello! I am Vijay's AI assistant. How can I help you today?" },
  ];

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
      let response =
        "That's a great question! Vijay is an expert in Web Engineering and AI. You can find more details in the Projects and Experience sections.";

      if (input.includes('contact')) {
        response =
          'You can reach Vijay via the Contact section at the bottom of the page, or through his LinkedIn profile.';
      } else if (input.includes('skill') || input.includes('tech')) {
        response =
          'Vijay specializes in Angular, React, Node.js, and Deep Learning. Check out the Skills section for a full list!';
      }

      this.messages.push({ role: 'assistant', content: response });
    }, 1000);
  }
}
