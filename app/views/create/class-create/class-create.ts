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
const ClassModal = 'views/class-modal/class-modal';

let _classViewModel = new ClassViewModel();


async function pageLoaded(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = _classViewModel;

    await _classViewModel.resolveClassData();
    initClassChosen();

    let source = fromObject({
        nav_next: navigation.navigate_back,
        nav_back: navigation.navigate_back,
        class_list: _classViewModel.getClassData()
    });
    
    page.bindingContext = source;
}

function selectClass(args): void {
    let page: Page = <Page>args.object.page;
    let sender = <view.View>args.object;
    let label = <Label>view.getViewById(sender.parent, sender.id);

    console.log(appSettings.getString('_classChosen'));
    appSettings.setString('_classChosen', label.text);
    console.log(appSettings.getString('_classChosen'));
}

function initClassChosen(): void {
    if(!appSettings.hasKey('_classChosen')) {
        appSettings.setString('_classChosen', 'none');
    }
    else{
        appSettings.setString('_classChosen', 'none');
    }
}

async function navigateAway() {
    _classViewModel.reset();
}

function displayInfo(args): void {
    let page: Page = <Page>args.object.page;
    let sender = <view.View>args.object;

    let context = {
        _className: sender.id
    };
    
    page.showModal(ClassModal, context, () => {
        console.log("closed");
    }, true);
}

export { pageLoaded, navigateAway, displayInfo, selectClass };
