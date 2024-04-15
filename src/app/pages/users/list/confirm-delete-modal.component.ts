// confirm-delete-modal.component.ts
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Confirm Deletion</h4>
      <button type="button" class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to delete this user?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="closeModal()">Cancel</button>
      <button type="button" class="btn btn-danger" (click)="confirmDeletion()">Delete</button>
    </div>
  `,
})
export class ConfirmDeleteModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss('cancel');
  }

  confirmDeletion() {
    this.activeModal.close('confirm');
  }
}
