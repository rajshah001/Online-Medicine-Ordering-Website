import { Injectable } from '@angular/core';
import { MedicalStores } from "./medical-stores.model";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MedicalStoresService {
  formData: MedicalStores;

  constructor(private firestore: AngularFirestore) { }

  getMedicalStores1(){
    return this.firestore.collection('medical-stores').snapshotChanges();
  }
  getMedicalStores(){
    return this.firestore.collection('medical-stores').snapshotChanges();
  }
}
