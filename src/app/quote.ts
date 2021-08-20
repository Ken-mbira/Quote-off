export class Quote {
    showDetails:boolean;
    constructor(name:string, id:number, jobTitle:string, votes:number, quote:string, dateAdded:Date){
        this.showDetails = false;
    }
}
