import { Page, ShownModallyData} from "ui/page";
import { EventData, fromObject, Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Label } from 'ui/label';
import * as view from 'ui/core/view';
import * as frame from 'ui/frame';
import * as http from 'http';
import { ClassViewModel } from '../../view-models/classViewModel';
import { Class } from '../../models/classes/class';
import { Proficiency } from '../../models/classes/proficiency';

var context: any;
var closeCallback: Function;
let _classViewModel = new ClassViewModel();
let details = "";

export function onLoaded(args: EventData) {
    console.log("ClassModal.onLoaded");

    let page = <Page>args.object;
}

export function onUnloaded() {
    console.log("ClassModal.onUnloaded");
    _classViewModel.reset();
    details = "";
}

export async function onShownModally(args) {
    console.log("ClassModal.onShownModally, context: " + args.context);
    context = args.context;
    closeCallback = args.closeCallback;

    let page = <Page>args.object;
    page.bindingContext = _classViewModel;

    await _classViewModel.resolveClassData();           // HTTP call to fetch race data from JSON
    getDetails();

    let source = fromObject({
        className: context._className,
        classDetails: details
    });

    page.bindingContext = source;
}

export function closeModal(args) {              // callback to close modal
    closeCallback();
};

function getDetails() {
    // _classViewModel.getClassData().forEach(element => {
    //     let obj = element as Object;
    //     for(let key in obj){
    //         details += key + " : " + obj[key] + "\n\n";
    //     }
        
    // });
    _classViewModel.getClassData().forEach(element => {
        let obj = element as Class;
        details += obj.toString();
    });
}