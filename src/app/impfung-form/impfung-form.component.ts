import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from "@angular/forms";
import { ImpfungFactory } from '../shared/impfung-factory';
import { ImpfungStoreService} from "../shared/impfung-store.service";
import { ImpfungFormErrorMessages} from "./impfung-form-error-messages";
import { Impfung} from "../shared/impfung";

// import { ImpfungValidators } from "../shared/impfung-validators";
import {Impfort} from "../shared/impfort";




@Component({
  selector: 'app-impfung-form',
  templateUrl: './impfung-form.component.html',
  styleUrls: ['./impfung-form.component.css']
})
export class ImpfungFormComponent implements OnInit {

  impfungForm : FormGroup;
  impfung = ImpfungFactory.empty();
  impforte : Array<Impfort> = [];

  isUpdatingImpfung = false;
  errors: { [key: string]: string } = {};

  constructor(
      private fb: FormBuilder,
      private bs: ImpfungStoreService,
      private route: ActivatedRoute,
      private router: Router,


  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    if (id) { // edit mode
      this.isUpdatingImpfung = true;
      this.bs.getAllImpforte().subscribe(impforte =>{
        this.impforte = impforte;
        this.bs.getSingle(id).subscribe(impfung => {
          this.impfung = impfung;
          this.initImpfung();
        });
      });
    }else{ // create mode
      this.bs.getAllImpforte().subscribe(impforte =>{
        this.impforte = impforte;
        this.impfung.impfort = this.impforte[0];
      });
    }
    this.initImpfung();
  }

  changeOrt(e) {
    this.impfung.impfort = this.impforte.find(x=>x.id == e.target.value);
  }

  initImpfung() {
    const id = this.route.snapshot.params["id"];
    this.impfungForm = this.fb.group({
      impfzeit: [this.impfung.impfzeit,[Validators.required]],
      impfdatum: [this.impfung.impfdatum,[Validators.required]],
      maxteilnehmer: [this.impfung.maxteilnehmer, [Validators.min(1)]],
      impfort: [this.impfung.impfort_id]
    },{
      "validators":[
        formGroup => {
          const time = formGroup.get('impfzeit').value;
          const date = formGroup.get('impfdatum').value;
          if (!time || !date) {
                return null;
              }
                if (!id) {
                  const dateTime = new Date(date + ' ' + time);
                  if (dateTime < new Date())
                    return {
                      notInFuture: true
                    };
                  return null;
                }
                return null;
              }

      ]
    });

    this.impfungForm.statusChanges.subscribe(() =>
      this.updateErrorMessages()
    );
  }

  submitForm() {
    const impfung: Impfung = ImpfungFactory.fromObject(this.impfungForm.value);
    impfung.id = this.route.snapshot.params["id"];
    impfung.impfort_id = this.impfung.impfort.id;

    if (this.isUpdatingImpfung) {
      this.bs.update(impfung).subscribe(res => {
            this.router.navigate(["../../impfungen", impfung.id], {
              relativeTo: this.route
            });
          },
          err => {
            console.log("Fehler ist passiert", err)
          });

    }  else {
      this.bs.create(impfung).subscribe(res => {
            this.impfung = ImpfungFactory.empty();
            this.impfungForm.reset(ImpfungFactory.empty());
            this.router.navigate(["../impfungen"], {
              relativeTo: this.route
            });

          },
          err => {
            console.log("Fehler ist passiert", err)
          });

    }

  }



  updateErrorMessages() {
    this.errors = {};

    for (const message of ImpfungFormErrorMessages) {
      const control = this.impfungForm.get(message.forControl);

      if (
          control &&
          control.dirty &&
          control.invalid &&
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }

    }

  }

}
