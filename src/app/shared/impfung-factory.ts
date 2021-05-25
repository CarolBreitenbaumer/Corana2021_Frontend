import { Impfung } from "./impfung";
import {Impfort} from "./impfort";
import {ImpfortFactory} from "./impfort-factory";

export class ImpfungFactory {

    static empty(): Impfung {
        return new Impfung(0, new Date(), new Date(),
            0, ImpfortFactory.empty(),0,[]);
    }


    static fromObject(rawImpfung: any) : Impfung {
        return new Impfung(
            rawImpfung.id,
            rawImpfung.impfzeit,
            rawImpfung.impfdatum,
            rawImpfung.maxteilnehmer,
            rawImpfung.impfort,
            rawImpfung.impfort.id,
            rawImpfung.angem_person
        );
    }

}
