import { Injectable } from '@angular/core';
import {Impfung} from "./impfung";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import {Impfort} from "./impfort";

@Injectable()
export class ImpfungStoreService {

  private api = 'https://corana21.s1710456003.student.kwmhgb.at/api';


  constructor(private http: HttpClient) { }


  getAll() : Observable<Array<Impfung>> {
    return this.http.get(`${this.api}/vaccinationAppointment`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getFreeVaccination() : Observable<Array<Impfung>> {
    return this.http.get(`${this.api}/vaccinationAppointment/free`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getAllImpforte() : Observable<Array<Impfort>> {
    return this.http.get(`${this.api}/vaccinationLocation`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  setUserVaccination(benutzer_id: number){
    return this.http.post(`${this.api}/user/setVaccinated/${benutzer_id}`,{})
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  registerUserVaccination(impfung_id: number){
    return this.http.post(`${this.api}/user/registerVaccinationAppointment/${impfung_id}`,{})
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getCurrentUserVaccinationInfo(): Observable<Impfung>{ // Gibt ein Objekt zurück, dass noch leer ist
    return this.http.get(`${this.api}/user/vaccinationAppointment`,{})
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle (id: number) : Observable<Impfung> {
    return this.http.get(`${this.api}/vaccinationAppointment/byId/${id}`)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  remove(id: number) : Observable<any> {
    return this.http.delete(`${this.api}/vaccinationAppointment/${id}`)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create (impfung: Impfung) : Observable<any> {
    return this.http.post(`${this.api}/vaccinationAppointment`, impfung)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));

  }

  update (impfung: Impfung) : Observable<any> {
    return this.http.put(`${this.api}/vaccinationAppointment/${impfung.id}`, impfung)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));

  }

/*
  check (id: number) : Observable<Boolean> {
    return this.http.get<Boolean>(`${this.api}/impfung/checkid/${id}`)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));

  }
*/

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
