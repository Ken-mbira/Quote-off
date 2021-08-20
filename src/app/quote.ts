export class Quote {
    showDetails:boolean;
    constructor(public quoteName:string, public id:number, public jobTitle:string, public upVotes:number, public downVotes:number, public quote:string, public dateAdded:Date){
        this.showDetails = false;
    }
}
