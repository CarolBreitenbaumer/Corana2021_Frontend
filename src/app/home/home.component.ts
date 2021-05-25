import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './style.css'
  ]
})
export class HomeComponent implements OnInit {

  constructor(
      public authService: AuthenticationService
  ) {}

  ngOnInit(): void {
  }

}
