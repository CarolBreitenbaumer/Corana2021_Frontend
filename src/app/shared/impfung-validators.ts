import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ImpfungStoreService} from "./impfung-store.service";
import {map} from 'rxjs/operators';
/*
export class ImpfungValidators {

    static idExists(bs : ImpfungStoreService) {
        return function(control: FormControl): Observable<{[error: string]: any}> {
            return bs.check(control.value)
                .pipe(map(exists => !exists ? null : {isbnExists: {valid: false }}));


        }
    }
}
*/
