import { EventData } from 'data/observable';
import { topmost } from 'ui/frame';
import { Page } from 'ui/page';


let navigate_back = (args: EventData) => {
    topmost().goBack();
}

let navigate_create_page = (args: EventData) => {
    let navigateEntry = {
        moduleName: 'views/create-page/create-page'
    }
    topmost().navigate(navigateEntry);
}

let navigate_library = (args: EventData) => {
    let navigateEntry = {
        moduleName: 'views/library/library'
    }
    topmost().navigate(navigateEntry);
}

let navigate_about = (args: EventData) => {
    let navigateEntry = {
        moduleName: 'views/about/about'
    }
    topmost().navigate(navigateEntry);
}

export { navigate_back, navigate_create_page, navigate_library, navigate_about }

