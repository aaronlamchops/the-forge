import { EventData, fromObject, Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Page } from 'ui/page';
import * as frame from 'ui/frame';
import * as http from 'http';

import * as navigation from '../navigation/navigation';
import { DataModel } from '../../view-models/data-model';


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


export { pageLoaded, navigateAway };