import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( public _fireservices: AngularFirestore) { }

  // Empleado: Hace referencia al nombre de la collection creada en realdatabase - firebase
  create_Newemployee(Record){
    return this._fireservices.collection("Empleado").add(Record)
  }
}
