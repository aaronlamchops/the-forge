import { Page, ShownModallyData} from "ui/page";
import { EventData, fromObject, Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Label } from 'ui/label';
import * as view from 'ui/core/view';
import * as frame from 'ui/frame';
import * as http from 'http';
import { DataModel } from '../../view-models/data-model';

var context: any;
var closeCallback: Function;
let dataModel = new DataModel();
let details: string = "";

export function onLoaded(args: EventData) {
    console.log("RaceModal.onLoaded");

    let page = <Page>args.object;

    // if (page.ios) {
    //     let controller = frame.topmost().ios.controller;
    //     let navigationBar = controller.navigationBar;

    //     navigationBar.barStyle = 1;
    // }
}

export function onUnloaded() {
    console.log("RaceModal.onUnloaded");
    dataModel.reset();
    details = "";
}

export async function onShownModally(args) {
    console.log("RaceModal.onShownModally, context: " + args.context);
    context = args.context;
    closeCallback = args.closeCallback;

    let page = <Page>args.object;
    page.bindingContext = dataModel;

    await dataModel.fetchRacesData();           // HTTP call to fetch race data from JSON
    await getDetails(context._raceName);        // async call in parallel with above
    let source = fromObject({
        raceName: context._raceName,
        raceDetails: details
    });

    page.bindingContext = source;
}

export function closeModal(args) {              // callback to close modal
    closeCallback();
};

async function getDetails(raceName: string) {   // required async call to retrieve details on race
    await dataModel.races.forEach(element => {
        if(element.name == context._raceName){
            let obj = element as Object;
            for(let key in obj){
                if(key == "abilityScore"){
                    details += key + " : \n";
                    for(let subkey in obj[key]){
                        details += "\t\t\t" + obj[key][subkey] + "\n";
                    }
                    details += "\n";
                }
                else{
                    details += key + " : " + obj[key] + "\n\n";
                }
            }
        }
    });
}
