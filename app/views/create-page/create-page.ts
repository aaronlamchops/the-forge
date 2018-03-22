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
import * as navigation from '../navigation/navigation';
import { DataModel } from '../../view-models/data-model';
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
        nav_back: navigation.navigate_back,
        race_list: dataModel.getRaces()
    });

    if (page.ios) {
        let controller = frame.topmost().ios.controller;
        let navigationBar = controller.navigationBar;

        navigationBar.barStyle = 1;
    }
    
    page.bindingContext = source;
}

async function navigateAway() {
    dataModel.reset();
}

function displayInfo(args): void {
    let page: Page = <Page>args.object.page;
    let sender = <view.View>args.object;
    let label = <Label>view.getViewById(sender.parent, sender.id);

    let context = {
        _raceName: label.text
    };
    
    page.showModal(RaceModal, context, () => {
        console.log("closed");
    }, true);
}

function selectRace(args): void {
    let page: Page = <Page>args.object.page;
    let sender = <view.View>args.object;
    let label = <Label>view.getViewById(sender.parent, sender.id);
    changeSelectionState(page, label);
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

export { pageLoaded, navigateAway, displayInfo, selectRace };