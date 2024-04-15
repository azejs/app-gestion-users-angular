 // list.component.ts
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from '../add/add.component';
import { UsersService } from './../../../services/users.service';
import { ConfirmDeleteModalComponent } from './confirm-delete-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UsersService],
})
export class ListComponent implements OnInit {
  users: any[] = [
 { id: 1, first_name: 'Azeddine', last_name: 'Fathi', email: 'azeddine.webjs@gmail.com' },
  { id: 2, first_name: 'Autre', last_name: 'Utilisateur', email: 'autre.utilisateur@example.com' },];
  totalItems: number = 0;
  itemsPerPage: number = 6;
  currentPage: number = 1;

  constructor(private modalService: NgbModal, private userService: UsersService) {}

  ngOnInit() {
    this.loadUsers();
  }

  openAddModal(user: any = {}) {
    const modalRef = this.modalService.open(AddComponent, {
      keyboard: false,
    });

    modalRef.componentInstance.initializeModal(user);

    modalRef.result.then(
      () => {
        this.loadUsers();
      },
      () => {
        // Code to execute when the modal is closed (e.g., when clicked outside)
      }
    );
  }
  loadUsers() {
    // Chargez les utilisateurs depuis le service
    this.userService.getUsers().subscribe(
      (data) => {
        // Ajoutez vos utilisateurs statiques ici avant d'ajouter les utilisateurs du service
        this.users = [
          { id: 1, first_name: 'Azeddine', last_name: 'Fathi', email: 'azeddine.webjs@gmail.com' },
          { id: 2, first_name: 'Autre', last_name: 'Utilisateur', email: 'autre.utilisateur@example.com' },
          // Vous pouvez ajouter plus d'utilisateurs ici si nécessaire
          ...data, // Ajoutez les utilisateurs du service après les utilisateurs statiques
        ];
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  confirmDelete(userId: number) {
    const modalRef: NgbModalRef = this.modalService.open(ConfirmDeleteModalComponent);

    modalRef.result.then(
      (result) => {
        if (result === 'confirm') {
          this.deleteUser(userId);
        }
      },
      () => {
        // Handle modal dismissal
      }
    );
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.loadUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  // Fonction pour ajouter ou modifier un utilisateur
  saveUser(user: any) {
    if (user.id) {
      // Si l'utilisateur a un ID, il s'agit d'une mise à jour
      this.userService.updateUser(user.id, user).subscribe(
        () => {
          this.loadUsers();
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    } else {
      // Sinon, il s'agit d'un nouvel utilisateur
      this.userService.addUser(user).subscribe(
        () => {
          this.loadUsers();
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    }
  }

  // Fonction pour ouvrir le modal d'édition avec les informations de l'utilisateur
  editUser(userId: number) {
    const userToEdit = this.users.find((user) => user.id === userId);
    if (userToEdit) {
      this.openAddModal(userToEdit);
    }
  }

  pageChanged(event: any) {
    this.currentPage = event;
    // Call loadUsers() here once your service is ready
    // this.loadUsers();
  }
}
