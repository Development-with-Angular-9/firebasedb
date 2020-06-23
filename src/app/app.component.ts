import { Component } from '@angular/core';
import { CrudService } from './service/crud.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebasedb';

  // empName = nombre empleado | empAddress = direccion empleado empAge= edad empleado
  employee: String;
  empName: String;
  empAge: number;
  empAddress: String; 
  message: String;

  constructor( public _crudservice: CrudService) {}

  CreateRecord()
  {
    let Record = {};
    Record["name"] = this.empName;
    Record["age"] = this.empAge;
    Record["address"] = this.empAddress

    this._crudservice.create_Newemployee(Record).then(res => {
      this.empName = "";
      this.empAge = undefined;
      this.empAddress = "";
      console.log(res);
      this.message = "Datos de empleado guardados";
    }).catch(error => {
      console.log(error);
    });
  }

}
