import { Component, OnInit } from '@angular/core';
import { MedicalStoresService } from "src/app/shared/medical-stores.service";
import { MedicalStores } from '../shared/medical-stores.model';

@Component({
  selector: 'app-nearby-stores',
  templateUrl: 'nearby-stores.component.html',
  styles: []
})
export class NearbyStoresComponent implements OnInit {

  list: MedicalStores[];
  constructor(private service: MedicalStoresService) {}
  
  ngOnInit() {
    this.service.getMedicalStores().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as MedicalStores;
      })
    });
  }

}
