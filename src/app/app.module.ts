import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MedicalStoresService } from "./shared/medical-stores.service";
import { OrderService } from './shared/order.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [MedicalStoresService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
