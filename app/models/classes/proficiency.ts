export class Proficiency {

    public armor: Array<string>;
    public weapons: Array<string>;
    public savingThrows: Array<string>;
    public chooseAmount: string;
    public skills: Array<string>;

    constructor(armor: Array<string>, weap: Array<string>, save: Array<string>, chooseAmount: string, skills: Array<string> ){
        this.armor = armor;
        this.weapons = weap;
        this.savingThrows = save;
        this.chooseAmount = chooseAmount;
        this.skills = skills;
    }
}