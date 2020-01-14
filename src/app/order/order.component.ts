import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
// import { MedicalStoresService } from '../shared/medical-stores.service';
import { MedicalStores } from '../shared/medical-stores.model';
import { OrderService } from '../shared/order.service';
import { Order } from "src/app/shared/order.model";

@Component({
  selector: 'app-order',
  templateUrl: 'order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {
  // For medical-stores-data from firestore
  list: MedicalStores[];
  
  // For stores dropdown
  constructor(private service : OrderService,
    private firestore : AngularFirestore) { }

  ngOnInit() {
    // this.service.getMedicalStores().subscribe(actionArray => {
    //   this.list = actionArray.map(item => {
    //     return {
    //       id: item.payload.doc.id,
    //       ...item.payload.doc.data()
    //     } as MedicalStores;
    //   })
    // });

    this.resetForm();
  }

  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.resetForm();
  //   this.service.formData = {
  //     name: null,
  //     address: null,
  //     email: null,
  //     mobileNumber: null,      
  //   }
  // }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      firstname: null,
      lastname: null,
      address: null,
      email: null,
      medical_store: null,
      medicines: null      
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('order').add(data);
    else
      this.firestore.doc('order/' + form.value.id).update(data);
    this.resetForm(form);
  }
}
