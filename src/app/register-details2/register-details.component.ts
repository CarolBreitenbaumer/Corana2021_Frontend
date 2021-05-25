import {Component, Input, OnInit} from '@angular/core';
import {Impfung} from "../shared/impfung";
import {ImpfungStoreService} from "../shared/impfung-store.service";
import {AuthenticationService} from "../shared/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'bs-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: [ './style.css']
})
export class RegisterDetailsComponent implements OnInit {
  @Input() impfung: Impfung
  alreadyRegisteredVaccination:boolean;
  registeredForThisAppointment:boolean;

  constructor(
    private bs: ImpfungStoreService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['id'])
      .subscribe(b => {
        this.impfung = b

        this.bs.getCurrentUserVaccinationInfo().subscribe(res => {
          this.alreadyRegisteredVaccination = res != null
          this.registeredForThisAppointment = res != null && res.id == this.impfung.id;
        });
      });

  }

  registerVaccination():void{
    this.bs.registerUserVaccination(this.impfung.id).subscribe(b=>{
      window.location.reload();
    },()=>{
      alert("Konnte nicht durchgeführt werden.");
      window.location.reload();
    });
  }
}
