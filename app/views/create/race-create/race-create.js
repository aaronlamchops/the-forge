"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var view = require("ui/core/view");
var appSettings = require("application-settings");
var navigation = require("../../navigation/navigation");
var data_model_1 = require("../../../view-models/data-model");
var RaceModal = 'views/race-modal/race-modal';
var dataModel = new data_model_1.DataModel();
function pageLoaded(args) {
    return __awaiter(this, void 0, void 0, function () {
        var page, source;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = args.object;
                    page.bindingContext = dataModel;
                    return [4 /*yield*/, dataModel.fetchRacesData()];
                case 1:
                    _a.sent();
                    initRaceChosen();
                    source = observable_1.fromObject({
                        nav_next: navigation.navigate_class_create,
                        nav_back: navigation.navigate_back,
                        race_list: dataModel.getRaces()
                    });
                    console.log('Page Loaded');
                    page.bindingContext = source;
                    return [2 /*return*/];
            }
        });
    });
}
exports.pageLoaded = pageLoaded;
function navigateAway() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dataModel.reset();
            return [2 /*return*/];
        });
    });
}
exports.navigateAway = navigateAway;
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
function selectRace(args) {
    var page = args.object.page;
    var sender = args.object;
    var label = view.getViewById(sender.parent, sender.id);
    console.log(appSettings.getString('_raceChosen'));
    appSettings.setString('_raceChosen', label.text);
    console.log(appSettings.getString('_raceChosen'));
    navigation.navigate_class_create();
}
exports.selectRace = selectRace;
function initRaceChosen() {
    if (!appSettings.hasKey('_raceChosen')) {
        appSettings.setString('_raceChosen', 'none');
    }
    else {
        appSettings.setString('_raceChosen', 'none');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFjZS1jcmVhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYWNlLWNyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF3RDtBQUd4RCxtQ0FBcUM7QUFDckMsa0RBQW9EO0FBQ3BELHdEQUEwRDtBQUMxRCw4REFBNEQ7QUFDNUQsSUFBTSxTQUFTLEdBQUcsNkJBQTZCLENBQUM7QUFHaEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFFaEMsb0JBQTBCLElBQWU7Ozs7OztvQkFFakMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO29CQUVoQyxxQkFBTSxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUE7O29CQUFoQyxTQUFnQyxDQUFDO29CQUNqQyxjQUFjLEVBQUUsQ0FBQztvQkFFYixNQUFNLEdBQUcsdUJBQVUsQ0FBQzt3QkFDcEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxxQkFBcUI7d0JBQzFDLFFBQVEsRUFBRSxVQUFVLENBQUMsYUFBYTt3QkFDbEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7cUJBQ2xDLENBQUMsQ0FBQztvQkFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUUzQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Q0FDaEM7QUF3Q1EsZ0NBQVU7QUF0Q25COzs7WUFDSSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7Q0FDckI7QUFvQ29CLG9DQUFZO0FBbENqQyxxQkFBcUIsSUFBSTtJQUNyQixJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN4QyxJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRXBDLElBQUksT0FBTyxHQUFHO1FBQ1YsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFO0tBQ3ZCLENBQUM7SUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixDQUFDO0FBdUJrQyxrQ0FBVztBQXJCOUMsb0JBQW9CLElBQUk7SUFDcEIsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDeEMsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTlELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUVsRCxVQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBVytDLGdDQUFVO0FBVDFEO0lBQ0ksSUFBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDbkMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDaEQ7U0FDRztRQUNBLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2hEO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndWkvbGFiZWwnO1xuaW1wb3J0ICogYXMgdmlldyBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgbmF2aWdhdGlvbiBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgRGF0YU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vdmlldy1tb2RlbHMvZGF0YS1tb2RlbCc7XG5jb25zdCBSYWNlTW9kYWwgPSAndmlld3MvcmFjZS1tb2RhbC9yYWNlLW1vZGFsJztcblxuXG5sZXQgZGF0YU1vZGVsID0gbmV3IERhdGFNb2RlbCgpO1xuXG5hc3luYyBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZGF0YU1vZGVsO1xuXG4gICAgYXdhaXQgZGF0YU1vZGVsLmZldGNoUmFjZXNEYXRhKCk7XG4gICAgaW5pdFJhY2VDaG9zZW4oKTtcblxuICAgIGxldCBzb3VyY2UgPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgbmF2X25leHQ6IG5hdmlnYXRpb24ubmF2aWdhdGVfY2xhc3NfY3JlYXRlLFxuICAgICAgICBuYXZfYmFjazogbmF2aWdhdGlvbi5uYXZpZ2F0ZV9iYWNrLFxuICAgICAgICByYWNlX2xpc3Q6IGRhdGFNb2RlbC5nZXRSYWNlcygpXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnUGFnZSBMb2FkZWQnKTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBzb3VyY2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlQXdheSgpIHtcbiAgICBkYXRhTW9kZWwucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUluZm8oYXJncyk6IHZvaWQge1xuICAgIGxldCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBsZXQgc2VuZGVyID0gPHZpZXcuVmlldz5hcmdzLm9iamVjdDtcblxuICAgIGxldCBjb250ZXh0ID0ge1xuICAgICAgICBfcmFjZU5hbWU6IHNlbmRlci5pZFxuICAgIH07XG4gICAgXG4gICAgcGFnZS5zaG93TW9kYWwoUmFjZU1vZGFsLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VkXCIpO1xuICAgIH0sIHRydWUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RSYWNlKGFyZ3MpOiB2b2lkIHtcbiAgICBsZXQgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0LnBhZ2U7XG4gICAgbGV0IHNlbmRlciA9IDx2aWV3LlZpZXc+YXJncy5vYmplY3Q7XG4gICAgbGV0IGxhYmVsID0gPExhYmVsPnZpZXcuZ2V0Vmlld0J5SWQoc2VuZGVyLnBhcmVudCwgc2VuZGVyLmlkKTtcblxuICAgIGNvbnNvbGUubG9nKGFwcFNldHRpbmdzLmdldFN0cmluZygnX3JhY2VDaG9zZW4nKSk7XG4gICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsIGxhYmVsLnRleHQpO1xuICAgIGNvbnNvbGUubG9nKGFwcFNldHRpbmdzLmdldFN0cmluZygnX3JhY2VDaG9zZW4nKSk7XG5cbiAgICBuYXZpZ2F0aW9uLm5hdmlnYXRlX2NsYXNzX2NyZWF0ZSgpO1xufVxuXG5mdW5jdGlvbiBpbml0UmFjZUNob3NlbigpOiB2b2lkIHtcbiAgICBpZighYXBwU2V0dGluZ3MuaGFzS2V5KCdfcmFjZUNob3NlbicpKSB7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnX3JhY2VDaG9zZW4nLCAnbm9uZScpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJywgJ25vbmUnKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkZWQsIG5hdmlnYXRlQXdheSwgZGlzcGxheUluZm8sIHNlbGVjdFJhY2UgfTsiXX0=