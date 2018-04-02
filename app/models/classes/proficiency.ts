export class Proficiency {

    public armor: Array<string>;
    public weapons: Array<string>;
    public savingThrows: Array<string>;
    public skillProficiencies: {
        chooseAmmount: string,
        skills: Array<string>
    };

    constructor(armor: Array<string>, weap: Array<string>, save: Array<string>, skillProf: { chooseAmmount: string, skills: Array<string> }){
        this.armor = armor;
        this.weapons = weap;
        this.savingThrows = save;
        this.skillProficiencies = skillProf;
    }
}