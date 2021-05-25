import { Impfort } from "./impfort";

export class Benutzer {

    constructor (public id: number,
                 public benutzername: string,
                 public vorname: string,
                 public nachname: string,
                 public plz: number,
                 public ort: string,
                 public straße: string,
                 public hausnummer: number,
                 public passwort: string,
                 public isAdmin: boolean,
                 public email: string) {

    }

}
