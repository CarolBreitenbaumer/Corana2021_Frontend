import { Component, OnInit, Input } from '@angular/core';
import { Impfung } from "../shared/impfung";
import { AngemPerson } from "../shared/angem-person";

@Component({
  selector: '.bs-impfung-liste-item',
  templateUrl: './impfung-liste-item.component.html',
  styleUrls: [ './style.css'
  ]
})
export class ImpfungListeItemComponent implements OnInit {

  @Input() impfung: Impfung

  constructor() { }

  ngOnInit(): void {
  }

}
