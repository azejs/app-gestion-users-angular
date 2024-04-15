 // src/app/elements/header/header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Ajoutez cette ligne pour lier le fichier CSS
})
export class HeaderComponent {
  selectedLanguage: string = 'en';

  changeLanguage(): void {
    console.log('Language changed to:', this.selectedLanguage);
  }
}
