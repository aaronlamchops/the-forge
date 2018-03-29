import { Observable, EventData } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import * as http from 'http';

import { Race } from '../models/race';


export class DataModel extends Observable{

    public races: ObservableArray<Race>;

    constructor(){
        super();

        this.races = new ObservableArray<Race>();
    }

    public getRaces(){
        return this.races;
    }

    public getIdFromRace(race: string): string{
        let id = '-1';
        this.races.forEach(element => {
            if(element.name == race){
                id = element.id as string;
            }
        });
        return id;                                // Will need to implement error handling later
    }

    public getLength(): number {
        return this.races.length;
    }

    public async fetchRacesData(){
        await http.getJSON('https://api.myjson.com/bins/bwrxx').then((result: Array<object>) =>{
            result.forEach((race: any) => {
                try {
                    this.races.push(new Race(race.id, race.name, race.abilityScore, race.age, race.alignment, race.size, race.sizeDescription, race.speed, race.language));
                }
                catch (err) {
                    console.log(err);
                }
            });
        });
    }

    public reset() {
        this.races = new ObservableArray<Race>();
    }
}