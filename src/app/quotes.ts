export class Quotes {
    showAuthor:boolean;
    constructor(public quote:string, public name:string, public author:string, public completeDate:Date){this.showAuthor=false;}
}
