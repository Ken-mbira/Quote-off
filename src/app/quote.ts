export class Quote {
    showDetails:boolean;
    topVote:boolean;
    upvoteValue:number;
    downvoteValue:number;
    constructor(public quoteName:string, public id:number, public jobTitle:string, public quote:string, public dateAdded:Date, public quoteSubmitter:string){
        this.showDetails = false;
        this.downvoteValue = 0;
        this.upvoteValue = 0;
        this.topVote = false;
    }
}
