import { Component, OnInit } from '@angular/core';
import {Impfung} from "../shared/impfung";
import { ImpfungStoreService} from "../shared/impfung-store.service";
import {AuthenticationService} from "../shared/authentication.service";


@Component({
  selector: 'bs-impfung-liste',
  templateUrl: './impfung-liste.component.html',
  styleUrls: ['./style.css']
})
export class ImpfungListeComponent implements OnInit {

  impfungen : Impfung[];
  benutzerImpfung:Impfung;
  loaded:boolean;

  constructor(private bs: ImpfungStoreService,
              public as: AuthenticationService) { }

  ngOnInit(): void {
    if(this.as.IsLoggedAndAdmin()) {
      this.bs.getAll().subscribe(res => {
        this.impfungen = res;
        this.loaded=true;
      });
    }else{
      this.bs.getFreeVaccination().subscribe(res =>{
        this.impfungen = res;
        this.loaded=true;
      });
    }
    if(this.as.IsLoggedAndNoAdmin()){
      this.bs.getCurrentUserVaccinationInfo().subscribe(res => {
        this.loaded=true;
        this.benutzerImpfung = res;
      });
    }
  }
}
