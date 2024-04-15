import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
 // styleUrls: ['./add.component.css'],
})
export class AddComponent {
  @Input() user: any = {}; // Propriété pour stocker les informations de l'utilisateur

  constructor(public activeModal: NgbActiveModal) {}

  // Méthode pour initialiser le modal
  initializeModal(user: any) {
    this.user = { ...user }; // Copie les informations de l'utilisateur pour éviter de modifier l'objet original
  }

  // Méthode appelée lorsqu'on clique sur le bouton "Save"
  save() {
    // Ajoutez votre logique pour sauvegarder les données ici

    // Fermez le modal après avoir sauvegardé les données
    this.activeModal.close();
  }

  // Méthode appelée lorsqu'on clique sur le bouton "Fermer"
  close() {
    // Fermez simplement le modal sans effectuer aucune action
    this.activeModal.dismiss('Fermé volontairement');
  }
}
