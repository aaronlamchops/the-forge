import { Page, ShownModallyData} from "ui/page";
import { EventData, fromObject, Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Label } from 'ui/label';
import * as view from 'ui/core/view';
import * as frame from 'ui/frame';
import * as http from 'http';
import { RaceViewModel } from '../../view-models/raceViewModel';
import { Race } from "../../models/races/race";

var context: any;
var closeCallback: Function;
let _raceViewModel = new RaceViewModel();
let details: string = "";
let _racename: string;

export function onLoaded(args: EventData) {
    console.log("RaceModal.onLoaded");

    let page = <Page>args.object;
}

export function onUnloaded() {
    console.log("RaceModal.onUnloaded");
    _raceViewModel.reset();
    details = "";
}

export async function onShownModally(args) {
    console.log("RaceModal.onShownModally, context: " + args.context._raceName);
    _racename = args.context._raceName;
    context = args.context;
    closeCallback = args.closeCallback;

    let page = <Page>args.object;
    page.bindingContext = _raceViewModel;

    await _raceViewModel.resolveRaceData();
    getDetails();

    let source = fromObject({
        raceName: context._raceName,
        raceDetails: details
    });

    page.bindingContext = source;
}

export function closeModal(args) {              // callback to close modal
    closeCallback();
};

async function getDetails() {
    _raceViewModel.getRaces().forEach(element => {
        let obj = element as Race;
        if(obj.name === _racename){
            details += obj.toString();
        }
    });
}
