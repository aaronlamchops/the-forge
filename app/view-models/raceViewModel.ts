import { Observable, EventData } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import * as http from 'http';
import { Race } from '../models/races/race';

/*

TODO:
- Rename file to raceViewModel.ts and update all files that use it
- Change structure and data model to be more like the class model
- Create the model for all things related in Race

*/


export class RaceViewModel extends Observable{

    private races: ObservableArray<Race>;

    constructor(){
        super();

        this.races = new ObservableArray<Race>();
    }

    public getRaces(){
        return this.races;
    }

    public getRaceByName(name: string) {
        let data;
        this.races.forEach(element => {
            if(element.name == name) {
                data = element;
            }
        });
        return data;
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
        let response = await fetch('https://theforge-api.herokuapp.com/api/v1/races');
        let race = await response.json();
        return race;
    }

    public async resolveRaceData() {
        await this.fetchRacesData()
            .then(data => {
                data.forEach((element: any) => {
                    let race = new Race(element['id'], element['name'], element['abilityScore'], 
                                        element['age'], element['alignment'], element['size'], 
                                        element['sizeDescription'], element['speed'], element['language']);
                    this.races.push(race);                    
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    public reset() {
        this.races = new ObservableArray<Race>();
    }
}