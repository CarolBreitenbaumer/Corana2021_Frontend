import {Impfort} from "./impfort";
import {AngemPerson} from "./angem-person";

export class Impfung {
    constructor (public id: number,
                 public impfzeit: Date,
                 public impfdatum: Date,
                 public maxteilnehmer: number,
                 public impfort: Impfort,
                 public impfort_id: number,
                 public angem_person: AngemPerson[]) {

    }
}
