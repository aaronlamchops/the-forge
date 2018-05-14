"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var view = require("ui/core/view");
var appSettings = require("application-settings");
var navigation = require("../../navigation/navigation");
var raceViewModel_1 = require("../../../view-models/raceViewModel");
var RaceModal = 'views/race-modal/race-modal';
var _raceViewModel = new raceViewModel_1.RaceViewModel();
function pageLoaded(args) {
    return __awaiter(this, void 0, void 0, function () {
        var page, source;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = args.object;
                    page.bindingContext = _raceViewModel;
                    return [4 /*yield*/, _raceViewModel.resolveRaceData()];
                case 1:
                    _a.sent();
                    initRaceChosen();
                    source = observable_1.fromObject({
                        nav_next: navigation.navigate_class_create,
                        nav_back: navigation.navigate_back,
                        race_list: _raceViewModel.getRaces()
                    });
                    page.bindingContext = source;
                    return [2 /*return*/];
            }
        });
    });
}
exports.pageLoaded = pageLoaded;
function selectRace(args) {
    var page = args.object.page;
    var sender = args.object;
    var label = view.getViewById(sender.parent, sender.id);
    console.log(appSettings.getString('_raceChosen'));
    appSettings.setString('_raceChosen', label.text);
    console.log(appSettings.getString('_raceChosen'));
    navigation.navigate_class_create(_raceViewModel.getRaceByName(label.text));
}
exports.selectRace = selectRace;
function displayInfo(args) {
    var page = args.object.page;
    var sender = args.object;
    var context = {
        _raceName: sender.id
    };
    page.showModal(RaceModal, context, function () {
        console.log("closed");
    }, true);
}
exports.displayInfo = displayInfo;
function initRaceChosen() {
    if (!appSettings.hasKey('_raceChosen')) {
        appSettings.setString('_raceChosen', 'none');
    }
    else {
        appSettings.setString('_raceChosen', 'none');
    }
}
function navigateAway() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _raceViewModel.reset();
            return [2 /*return*/];
        });
    });
}
exports.navigateAway = navigateAway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFjZS1jcmVhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYWNlLWNyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF3RDtBQUd4RCxtQ0FBcUM7QUFDckMsa0RBQW9EO0FBQ3BELHdEQUEwRDtBQUMxRCxvRUFBbUU7QUFDbkUsSUFBTSxTQUFTLEdBQUcsNkJBQTZCLENBQUM7QUFHaEQsSUFBSSxjQUFjLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFFekMsb0JBQTBCLElBQWU7Ozs7OztvQkFFakMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO29CQUVyQyxxQkFBTSxjQUFjLENBQUMsZUFBZSxFQUFFLEVBQUE7O29CQUF0QyxTQUFzQyxDQUFDO29CQUN2QyxjQUFjLEVBQUUsQ0FBQztvQkFFYixNQUFNLEdBQUcsdUJBQVUsQ0FBQzt3QkFDcEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxxQkFBcUI7d0JBQzFDLFFBQVEsRUFBRSxVQUFVLENBQUMsYUFBYTt3QkFDbEMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7cUJBQ3ZDLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Q0FDaEM7QUF3Q1EsZ0NBQVU7QUF0Q25CLG9CQUFvQixJQUFJO0lBQ3BCLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEMsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU5RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNsRCxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFFbEQsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQTRCK0MsZ0NBQVU7QUExQjFELHFCQUFxQixJQUFJO0lBQ3JCLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFcEMsSUFBSSxPQUFPLEdBQUc7UUFDVixTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7S0FDdkIsQ0FBQztJQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNiLENBQUM7QUFla0Msa0NBQVc7QUFiOUM7SUFDSSxJQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNoRDtTQUNHO1FBQ0EsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDaEQ7QUFDTCxDQUFDO0FBRUQ7OztZQUNJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7OztDQUMxQjtBQUVvQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndWkvbGFiZWwnO1xuaW1wb3J0ICogYXMgdmlldyBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgbmF2aWdhdGlvbiBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgUmFjZVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uLy4uL3ZpZXctbW9kZWxzL3JhY2VWaWV3TW9kZWwnO1xuY29uc3QgUmFjZU1vZGFsID0gJ3ZpZXdzL3JhY2UtbW9kYWwvcmFjZS1tb2RhbCc7XG5cblxubGV0IF9yYWNlVmlld01vZGVsID0gbmV3IFJhY2VWaWV3TW9kZWwoKTtcblxuYXN5bmMgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IF9yYWNlVmlld01vZGVsO1xuXG4gICAgYXdhaXQgX3JhY2VWaWV3TW9kZWwucmVzb2x2ZVJhY2VEYXRhKCk7XG4gICAgaW5pdFJhY2VDaG9zZW4oKTtcblxuICAgIGxldCBzb3VyY2UgPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgbmF2X25leHQ6IG5hdmlnYXRpb24ubmF2aWdhdGVfY2xhc3NfY3JlYXRlLFxuICAgICAgICBuYXZfYmFjazogbmF2aWdhdGlvbi5uYXZpZ2F0ZV9iYWNrLFxuICAgICAgICByYWNlX2xpc3Q6IF9yYWNlVmlld01vZGVsLmdldFJhY2VzKClcbiAgICB9KTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBzb3VyY2U7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFJhY2UoYXJncyk6IHZvaWQge1xuICAgIGxldCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBsZXQgc2VuZGVyID0gPHZpZXcuVmlldz5hcmdzLm9iamVjdDtcbiAgICBsZXQgbGFiZWwgPSA8TGFiZWw+dmlldy5nZXRWaWV3QnlJZChzZW5kZXIucGFyZW50LCBzZW5kZXIuaWQpO1xuXG4gICAgY29uc29sZS5sb2coYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdfcmFjZUNob3NlbicpKTtcbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJywgbGFiZWwudGV4dCk7XG4gICAgY29uc29sZS5sb2coYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdfcmFjZUNob3NlbicpKTtcblxuICAgIG5hdmlnYXRpb24ubmF2aWdhdGVfY2xhc3NfY3JlYXRlKF9yYWNlVmlld01vZGVsLmdldFJhY2VCeU5hbWUobGFiZWwudGV4dCkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW5mbyhhcmdzKTogdm9pZCB7XG4gICAgbGV0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGxldCBzZW5kZXIgPSA8dmlldy5WaWV3PmFyZ3Mub2JqZWN0O1xuXG4gICAgbGV0IGNvbnRleHQgPSB7XG4gICAgICAgIF9yYWNlTmFtZTogc2VuZGVyLmlkXG4gICAgfTtcbiAgICBcbiAgICBwYWdlLnNob3dNb2RhbChSYWNlTW9kYWwsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbG9zZWRcIik7XG4gICAgfSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGluaXRSYWNlQ2hvc2VuKCk6IHZvaWQge1xuICAgIGlmKCFhcHBTZXR0aW5ncy5oYXNLZXkoJ19yYWNlQ2hvc2VuJykpIHtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsICdub25lJyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnX3JhY2VDaG9zZW4nLCAnbm9uZScpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGVBd2F5KCkge1xuICAgIF9yYWNlVmlld01vZGVsLnJlc2V0KCk7XG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkZWQsIG5hdmlnYXRlQXdheSwgZGlzcGxheUluZm8sIHNlbGVjdFJhY2UgfTsiXX0=