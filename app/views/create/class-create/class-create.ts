import { EventData, fromObject, Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Page, Color } from 'tns-core-modules/ui/page';
import { Label } from 'ui/label';
import { Button } from 'ui/button';
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view";
import * as view from 'ui/core/view';
import * as frame from 'ui/frame';
import * as http from 'http';
import * as appSettings from 'application-settings';
import * as navigation from '../../navigation/navigation';
import { ClassViewModel } from '../../../view-models/classViewModel';


let _classViewModel = new ClassViewModel();


async function pageLoaded(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = _classViewModel;

    await _classViewModel.resolveClassData();
    // console.log(appSettings.getString('_raceChosen'));

    let source = fromObject({
        nav_next: navigation.navigate_class_create,
        nav_back: navigation.navigate_back,
        class_list: _classViewModel.getClassData()
    });

    // if (page.ios) {
    //     let controller = frame.topmost().ios.controller;
    //     let navigationBar = controller.navigationBar;

    //     navigationBar.barStyle = 1;
    // }
    
    
    page.bindingContext = source;
}

async function navigateAway() {
    _classViewModel.reset();
}



export { pageLoaded, navigateAway };