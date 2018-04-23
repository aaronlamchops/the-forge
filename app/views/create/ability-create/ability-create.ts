import { EventData, fromObject, Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Page } from 'tns-core-modules/ui/page';
import { Label } from 'ui/label';
import { Button } from 'ui/button';
import * as view from 'ui/core/view';
import * as frame from 'ui/frame';
import * as http from 'http';
import * as appSettings from 'application-settings';
import * as navigation from '../../navigation/navigation';



function pageLoaded(args: EventData) {

    let page = <Page>args.object;

    console.log(appSettings.getString('_raceChosen'));
    console.log(appSettings.getString('_classChosen'));

    let source = fromObject({
        nav_next: navigation.navigate_back,
        nav_back: navigation.navigate_back
    });
    
    page.bindingContext = source;
}

async function getRacailBonuses() {
    
}


export { pageLoaded };