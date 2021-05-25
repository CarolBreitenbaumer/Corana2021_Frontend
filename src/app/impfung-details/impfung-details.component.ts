import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Impfung } from "../shared/impfung";
import { ImpfungStoreService} from "../shared/impfung-store.service";
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-impfung-details',
  templateUrl: './impfung-details.component.html',
  styleUrls: [ './style.css'
  ]
})
export class ImpfungDetailsComponent implements OnInit {

  impfung : Impfung

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
        });
  }

  setUserVaccination(event,benutzer_id){
    this.bs.setUserVaccination(benutzer_id).subscribe(b => {
      window.location.reload();
    });
  }

  removeImpfung() {
    if (confirm('Impfung löschen? Sind Sie sicher?')) {
      this.bs.remove(this.impfung.id)
          .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));

    }
  }
}
