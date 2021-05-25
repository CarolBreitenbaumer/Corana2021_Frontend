import { Impfung } from "./impfung";
import {Impfort} from "./impfort";

export class ImpfortFactory {

    static empty(): Impfort {
        return new Impfort(0,0,"","",0,"");
    }
}
