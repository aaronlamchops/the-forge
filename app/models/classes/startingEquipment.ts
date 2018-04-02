export class StartingEquipment {

    public choice: Array<EquipmentChoice>;
    public other: Array<string>;

    constructor(choice: Array<EquipmentChoice>, other: Array<string>) {
        this.choice = choice;
        this.other = other;
    }
}

export class EquipmentChoice {
    
    public action: string;
    public decision: Array<Option>;

    constructor(action: string, decision: Array<Option>){
        this.action = action;
        this.decision = decision;
    }
}

export class Option {

    public option: string;
    public item: string;

    constructor(option: string, item: string){
        this.option = option;
        this.item = item;
    }
}