import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  isSecretPassword  = false;
  logs: string[] = [];
  
  toggleDetail() {
    this.isSecretPassword = !this.isSecretPassword;
    this.logs.push(`click at: ${new Date()}`);
  }
}
