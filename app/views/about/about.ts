import { EventData, fromObject } from 'data/observable';
import { Page } from 'ui/page';
import * as frame from 'ui/frame';

import * as navigation from '../navigation/navigation';


function pageLoaded(args: EventData) {

    let page = <Page>args.object;
    let source = fromObject({
        nav_back: navigation.navigate_back
    });

    if (page.ios) {
        let controller = frame.topmost().ios.controller;
        let navigationBar = controller.navigationBar;

        navigationBar.barStyle = 1;
    }
    
    page.bindingContext = source;
}

export { pageLoaded };