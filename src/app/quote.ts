export class Quote {
    showDetails:boolean;
    upvoteValue:number;
    downvoteValue:number;
    constructor(public quoteName:string, public id:number, public jobTitle:string, public quote:string, public dateAdded:Date){
        this.showDetails = false;
        this.downvoteValue = 0;
        this.upvoteValue = 0;
    }
}
