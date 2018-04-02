export class Feature {
    
    public name: string;
    public description: string;
    public level: Array<string>;

    constructor(name: string, desc: string, lvl: Array<string>){
        this.name = name;
        this.description = desc;
        this.level = lvl;
    }
}