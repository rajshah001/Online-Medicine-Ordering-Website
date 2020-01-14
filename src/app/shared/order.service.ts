import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from "src/app/shared/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData: Order;

  constructor(private firestore: AngularFirestore) { }
}
