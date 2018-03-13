import { EventData, fromObject } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Page } from 'ui/page';
import * as frame from 'ui/frame';
import * as http from 'http';

import * as navigation from '../navigation/navigation';
import { DataModel } from '../../view-models/data-model';


let dataModel = new DataModel();

async function pageLoaded(args: EventData) {

    let page = <Page>args.object;

    await dataModel.fetchRacesData();

    dataModel.getRaces().forEach(element => {
        console.log(JSON.stringify(element));
    });

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

// async function get_data() {
//     var result: any;
//     await http.getJSON("http://127.0.0.1:5984/the-forge/74468e7d99b83e8cbb5c8a010d004076")
//     .then(function (r: any) {
//         result = new DataModel(r._id, r._rev, r.races);
//     })
//     .catch(function (e) {
//         console.log(e);
//     });
//     return result;
// }

export { pageLoaded, navigateAway };