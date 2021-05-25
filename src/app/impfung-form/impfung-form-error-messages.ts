export class ErrorMessage {

    constructor (
        public forControl: string,
        public forValidator: string,
        public text : string

    ) {}

}

export const ImpfungFormErrorMessages = [

    new ErrorMessage('impfzeit', 'required', 'Impfzeit ist ein Pflichtfeld.'),
    new ErrorMessage('impfdatum', 'required', 'Impfzeit ist ein Pflichtfeld.'),
  new ErrorMessage('maxteilnehmer', 'min', 'Die Maximalen Teilnehmer müssen mind. 1 sein.')

]
