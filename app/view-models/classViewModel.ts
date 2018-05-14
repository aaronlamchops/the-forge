import { Observable, EventData } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import * as http from 'http';
import { Class } from '../models/classes/class';

//Singleton
export class ClassViewModel extends Observable {

    public classData: ObservableArray<Class>;

    constructor() {
        super();

        this.classData = new ObservableArray<Class>();
    }

    public getClassData() {
        return this.classData;
    }

    public getByClassName(name: string) {
        let data;
        this.classData.forEach(element => {
            if(element.name == name) {
                data = element;
            }
        });
        return data;
    }

    public async fetchClassData() {
        // let response = await fetch('https://api.myjson.com/bins/6397b'); <-- DEPRICATED
        // let response = await fetch('https://api.myjson.com/bins/s6reb'); <-- DEPRICATED
        let response = await fetch('https://theforge-api.herokuapp.com/api/v1/classes');
        let clss = await response.json();
        return clss;
    }

    public async resolveClassData(){
        await this.fetchClassData()
            .then(data => {
                data.forEach((element: any) => {
                    let clss = new Class(element['id'], element['name'], element['hitDice'], element['proficiencies'], 
                                        element['startingEquipment'], element['features'], element['table']);
                    this.classData.push(clss);
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    public reset() {
        this.classData = new ObservableArray<Class>();
    }
}