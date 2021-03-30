export class Quotes {
    showAuthor:boolean;
    upvote:number;
    downvote:number
    constructor(public quote:string, public name:string, public author:string, public completeDate:Date){this.showAuthor=false;this.upvote=0;this.downvote=0}
}
