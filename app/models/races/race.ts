import { AbilityScore } from './abilityScore';

export class Race {

    public id: string;
    public name: string;
    public abilityScore: AbilityScore;
    public age: string;
    public alignment: string;
    public size: string;
    public sizeDescription: string;
    public speed: number;
    public language: string;

    constructor(id: string, name: string, abilityScore: AbilityScore, age: string, alignment: string, size: string, sizeDescription: string, speed: number, language: string){
        this.id = id;
        this.name = name;
        this.abilityScore = abilityScore;
        this.age = age;
        this.alignment = alignment
        this.size = size;
        this.sizeDescription = sizeDescription;
        this.speed = speed;
        this.language = language;
    }

    public toString(): string {
        let details = ``;

        details +=  `Id: \t\t\t${ this.id }\n` +
                    `Name: \t\t${ this.name }\n\n` +
                    `Ability Score: \t\t\n${ this.convertAbilityScore() }\n` +
                    `Age: \n${ this.age }\n\n` +
                    `Alignment: \n${ this.alignment }\n\n` +
                    `Size: \t\t${ this.size }\n` +
                    `${ this.sizeDescription }\n\n` +
                    `Speed: \t\t${ this.speed }\n\n` +
                    `Language: \n${ this.language }\n`;


        return details;
    }

    private convertAbilityScore(): string {
        let details = ``;

        this.abilityScore.value.forEach(ability => {
            details += `\t\t\t${ ability }\n`;
        });

        return details;
    }
}