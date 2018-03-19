import { EventData, fromObject, Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Page } from 'tns-core-modules/ui/page';
import { Label } from 'ui/label';
import * as view from 'ui/core/view';
import * as frame from 'ui/frame';
import * as http from 'http';

import * as navigation from '../navigation/navigation';
import { DataModel } from '../../view-models/data-model';

const RaceModal = 'views/race-modal/race-modal';
let dataModel = new DataModel();



async function pageLoaded(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = dataModel;

    await dataModel.fetchRacesData();

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
    let label = <Label>view.getViewById(sender.parent, 'race-label');

    let context = {
        _raceName: label.text
    };
    
    page.showModal(RaceModal, context, () => {
        console.log("closed");
    }, true);
}


export { pageLoaded, navigateAway, displayInfo };