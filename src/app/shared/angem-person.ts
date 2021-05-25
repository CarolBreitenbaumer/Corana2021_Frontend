import {Benutzer} from "./benutzer";

export class AngemPerson {
    constructor (
        public id: number,
        public geschlecht: string,
        public gbdatum: string,
        public svnr: number,
        public impfungverabreicht: boolean,
        public impfung_id: string,
        public benutzer_id: number,
        public benutzer:Benutzer) {

    }
}
