export class LevelTableRow {
    public level: string;
    public proficiencyBonus: string;
    public features: Array<string>;
    public other: Array<object>;

    constructor(lvl: string, profB: string, feat: Array<string>, other: Array<object>) {
        this.level = lvl;
        this.proficiencyBonus = profB;
        this.features = feat;
        this.other = other;
    }
}