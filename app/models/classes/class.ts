import { Proficiency } from './proficiency';
import { StartingEquipment } from './startingEquipment';
import { Feature } from './feature';
import { LevelTableRow } from './levelTable';

export class Class {

    public id: string;
    public name: string;
    public hitDice: string;
    public proficiencies: Proficiency;
    public startingEquipment: StartingEquipment;
    public features: Array<Feature>;
    public levelTable: Array<LevelTableRow>;

    constructor(id: string, name: string, hitDice: string, proficiencies: Proficiency, startingEquipment: StartingEquipment, features: Array<Feature>, levelTable: Array<LevelTableRow>) {
        this.id = id;
        this.name = name;
        this.hitDice = hitDice;
        this.proficiencies = proficiencies;
        this.startingEquipment = startingEquipment;
        this.features = features;
        this.levelTable = levelTable;
    }

    public toString() {
        let details = ``;
        details +=  `Id: \t\t${ this.id }\n` + 
                    `Name: \t${ this.name }\n` + 
                    `Hit Dice: \t${ this.hitDice }\n\n` +
                    `Proficiencies: \t\n\n${ this.convertProficiencies() }\n` +
                    `Features: \n\n${ this.convertFeatures() }`;
                // this.startingEquipment.toString() +
                // this.levelTable.toString();
        this.convertFeatures();
        return details;
    }

    private convertProficiencies() {
        let details = ``;
        details +=  `\tArmor: \t\t\t${ this.proficiencies.armor }\n` + 
                    `\tWeapons: \t\t${ this.proficiencies.weapons }\n` +
                    `\tSaving Throws:\t`;
        
        this.proficiencies.savingThrows.forEach(sv => {
            details += `${ sv }\n\t\t\t\t\t`;
        });

        details +=  `\n\tChoose Amount:\t${ this.proficiencies.chooseAmount }\n\t` + 
                    `Skills:`;

        this.proficiencies.skills.forEach(skill => {
            details += `\t\t\t${ skill }\n\t\t`;
        });
        return details;
    }

    private convertFeatures() {
        let details = ``;
        this.features.forEach(feat => {
            details +=  `${ feat.name.toUpperCase() }\n\n` +
                        `${ feat.description.toLowerCase() }\n\n\n`;
        });
        return details;
    }
}