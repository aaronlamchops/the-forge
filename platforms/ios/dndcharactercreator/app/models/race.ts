export class Race {

    public id: string;
    public name: string;
    public abilityScore: {
        ability: string,
        value: number
    }
    public age: string;
    public alignment: string;
    public size: string;
    public sizeDescription: string;
    public speed: number;
    public language: string;

    constructor(id: string, name: string, abilityScore: {ability: string, value: number}, age: string, alignment: string, size: string, sizeDescription: string, speed: number, language: string){
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
}