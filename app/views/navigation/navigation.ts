import { EventData } from 'data/observable';
import { topmost } from 'ui/frame';
import { Page } from 'ui/page';


let navigate_back = (args: EventData) => {
    topmost().goBack();
}

let navigate_race_create = (args: EventData) => {
    let navigateEntry = {
        moduleName: 'views/create/race-create/race-create'
    }
    topmost().navigate(navigateEntry);
}

let navigate_class_create = (context):void => {
    let navigateEntry = {
        moduleName: 'views/create/class-create/class-create',
        context: context
    }
    topmost().navigate(navigateEntry);
}

let navigate_ability_create = (context):void => {
    let navigateEntry = {
        moduleName: 'views/create/ability-create/ability-create',
        context: context
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

export { navigate_back, navigate_race_create, navigate_class_create, navigate_ability_create, navigate_library, navigate_about }

