 // app.module.ts
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { MenuComponent } from './elements/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/users/list/list.component';
import { AddComponent } from './pages/users/add/add.component';
import { ConfirmDeleteModalComponent } from './pages/users/list/confirm-delete-modal.component';

// Importez NgbModule correctement
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    ConfirmDeleteModalComponent,
    // ... autres composants
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,  // Ajoutez NgbModule ici
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
