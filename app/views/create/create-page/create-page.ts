import { EventData, fromObject, Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Page, Color } from 'tns-core-modules/ui/page';
import { Label } from 'ui/label';
import { Button } from 'ui/button';
import { ListView } from "tns-core-modules/ui/list-view";
import * as view from 'ui/core/view';
import * as frame from 'ui/frame';
import * as http from 'http';
import * as appSettings from 'application-settings';
import * as navigation from '../../navigation/navigation';
import { DataModel } from '../../../view-models/data-model';
const RaceModal = 'views/race-modal/race-modal';


let dataModel = new DataModel();
let chooseState = false;
let defaultBGColor = 'rgb(146, 145, 145)';
let highlightColor = 'rgb(177, 138, 138)';


async function pageLoaded(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = dataModel;

    await dataModel.fetchRacesData();
    initRaceChosen();

    let source = fromObject({
        nav_next: navigation.navigate_class_create,
        nav_back: navigation.navigate_back,
        race_list: dataModel.getRaces()
    });

    console.log('Page Loaded');
    
    // if (page.ios) {
    //     let controller = frame.topmost().ios.controller;
    //     let navigationBar = controller.navigationBar;

    //     navigationBar.barStyle = 1;
    // }

    page.bindingContext = source;
    // resetBackgroundSelection(page, args);
}

async function navigateAway() {
    dataModel.reset();
}

function displayInfo(args): void {
    let page: Page = <Page>args.object.page;
    let sender = <view.View>args.object;

    let context = {
        _raceName: sender.id
    };
    
    page.showModal(RaceModal, context, () => {
        console.log("closed");
    }, true);
}

function selectRace(args): void {
    let page: Page = <Page>args.object.page;
    let sender = <view.View>args.object;
    let label = <Label>view.getViewById(sender.parent, sender.id);
    console.log(appSettings.getString('_raceChosen'));
    console.log(chooseState);
    changeSelectionState(page, label);
    console.log(appSettings.getString('_raceChosen'));
    console.log(chooseState);
    console.log('ID = ' + sender.id);
}

function initRaceChosen(): void {
    if(!appSettings.hasKey('_raceChosen')) {
        appSettings.setString('_raceChosen', 'none');
        chooseState = false;
    }
    else{
        appSettings.setString('_raceChosen', 'none');
        chooseState = false;
    }
}

function changeSelectionState(page: Page, label: Label): void {
    // In state of Race not Chosen
    if(!chooseState){                                                                        
        appSettings.setString('_raceChosen', label.text);
        label.backgroundColor = highlightColor;
        chooseState = true;
    }
    else{  // In state of Race already Chosen                                                                                  
        if(appSettings.getString('_raceChosen') == label.text){                 // UnSelecting
            appSettings.setString('_raceChosen', 'none');
            label.backgroundColor = defaultBGColor;
            chooseState = false;
        }
        else if(appSettings.getString('_raceChosen') != label.text){            // Selecting a different 
            let previousRace = appSettings.getString('_raceChosen');
            let previousId: string = dataModel.getIdFromRace(previousRace);     // Could possibly not be in the datamodel
            let previousLabel = <Label>page.getViewById(previousId);
            previousLabel.backgroundColor = defaultBGColor;   
            
            appSettings.setString('_raceChosen', label.text);
            label.backgroundColor = highlightColor;
            chooseState = true;
        }
    }
}

async function resetBackgroundSelection(page: Page, args: EventData) {
    let sender = <view.View>args.object;
    for(let index = 1; index <= dataModel.getLength(); index++) {
        let check = '0' + index;
        let element = <Label>view.getViewById(sender.parent, check);
        console.log(check);
        console.log(element);
        console.log(element.backgroundColor);
        if(element.backgroundColor == highlightColor || element.backgroundColor == undefined) {
            element.backgroundColor = defaultBGColor;
            console.log('reset bg color');
        }
    }
}

export { pageLoaded, navigateAway, displayInfo, selectRace };