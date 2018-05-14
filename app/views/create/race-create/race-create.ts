import { EventData, fromObject } from 'data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { Label } from 'ui/label';
import * as view from 'ui/core/view';
import * as appSettings from 'application-settings';
import * as navigation from '../../navigation/navigation';
import { RaceViewModel } from '../../../view-models/raceViewModel';
const RaceModal = 'views/race-modal/race-modal';


let _raceViewModel = new RaceViewModel();

async function pageLoaded(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = _raceViewModel;

    await _raceViewModel.resolveRaceData();
    initRaceChosen();

    let source = fromObject({
        nav_next: navigation.navigate_class_create,
        nav_back: navigation.navigate_back,
        race_list: _raceViewModel.getRaces()
    });

    page.bindingContext = source;
}

function selectRace(args): void {
    let page: Page = <Page>args.object.page;
    let sender = <view.View>args.object;
    let label = <Label>view.getViewById(sender.parent, sender.id);

    console.log(appSettings.getString('_raceChosen'));
    appSettings.setString('_raceChosen', label.text);
    console.log(appSettings.getString('_raceChosen'));

    navigation.navigate_class_create(_raceViewModel.getRaceByName(label.text));
}

function displayInfo(args): void {
    let page: Page = <Page>args.object.page;
    let sender = <view.View>args.object;

    let context = {
        _raceName: sender.id
    };
    
    page.showModal(RaceModal, context, () => {
        console.log("closed");
    }, true);
}

function initRaceChosen(): void {
    if(!appSettings.hasKey('_raceChosen')) {
        appSettings.setString('_raceChosen', 'none');
    }
    else{
        appSettings.setString('_raceChosen', 'none');
    }
}

async function navigateAway() {
    _raceViewModel.reset();
}

export { pageLoaded, navigateAway, displayInfo, selectRace };