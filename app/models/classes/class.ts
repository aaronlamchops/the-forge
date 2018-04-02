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

}