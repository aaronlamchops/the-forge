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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFjZS1jcmVhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYWNlLWNyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF3RDtBQUd4RCxtQ0FBcUM7QUFDckMsa0RBQW9EO0FBQ3BELHdEQUEwRDtBQUMxRCw4REFBNEQ7QUFDNUQsSUFBTSxTQUFTLEdBQUcsNkJBQTZCLENBQUM7QUFHaEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFFaEMsb0JBQTBCLElBQWU7Ozs7OztvQkFFakMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO29CQUVoQyxxQkFBTSxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUE7O29CQUFoQyxTQUFnQyxDQUFDO29CQUNqQyxjQUFjLEVBQUUsQ0FBQztvQkFFYixNQUFNLEdBQUcsdUJBQVUsQ0FBQzt3QkFDcEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxxQkFBcUI7d0JBQzFDLFFBQVEsRUFBRSxVQUFVLENBQUMsYUFBYTt3QkFDbEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7cUJBQ2xDLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Q0FDaEM7QUF3Q1EsZ0NBQVU7QUF0Q25COzs7WUFDSSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7Q0FDckI7QUFvQ29CLG9DQUFZO0FBbENqQyxxQkFBcUIsSUFBSTtJQUNyQixJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN4QyxJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRXBDLElBQUksT0FBTyxHQUFHO1FBQ1YsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFO0tBQ3ZCLENBQUM7SUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixDQUFDO0FBdUJrQyxrQ0FBVztBQXJCOUMsb0JBQW9CLElBQUk7SUFDcEIsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDeEMsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTlELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUVsRCxVQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBVytDLGdDQUFVO0FBVDFEO0lBQ0ksSUFBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDbkMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDaEQ7U0FDRztRQUNBLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2hEO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndWkvbGFiZWwnO1xuaW1wb3J0ICogYXMgdmlldyBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgbmF2aWdhdGlvbiBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgRGF0YU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vdmlldy1tb2RlbHMvZGF0YS1tb2RlbCc7XG5jb25zdCBSYWNlTW9kYWwgPSAndmlld3MvcmFjZS1tb2RhbC9yYWNlLW1vZGFsJztcblxuXG5sZXQgZGF0YU1vZGVsID0gbmV3IERhdGFNb2RlbCgpO1xuXG5hc3luYyBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZGF0YU1vZGVsO1xuXG4gICAgYXdhaXQgZGF0YU1vZGVsLmZldGNoUmFjZXNEYXRhKCk7XG4gICAgaW5pdFJhY2VDaG9zZW4oKTtcblxuICAgIGxldCBzb3VyY2UgPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgbmF2X25leHQ6IG5hdmlnYXRpb24ubmF2aWdhdGVfY2xhc3NfY3JlYXRlLFxuICAgICAgICBuYXZfYmFjazogbmF2aWdhdGlvbi5uYXZpZ2F0ZV9iYWNrLFxuICAgICAgICByYWNlX2xpc3Q6IGRhdGFNb2RlbC5nZXRSYWNlcygpXG4gICAgfSk7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gc291cmNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZUF3YXkoKSB7XG4gICAgZGF0YU1vZGVsLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbmZvKGFyZ3MpOiB2b2lkIHtcbiAgICBsZXQgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0LnBhZ2U7XG4gICAgbGV0IHNlbmRlciA9IDx2aWV3LlZpZXc+YXJncy5vYmplY3Q7XG5cbiAgICBsZXQgY29udGV4dCA9IHtcbiAgICAgICAgX3JhY2VOYW1lOiBzZW5kZXIuaWRcbiAgICB9O1xuICAgIFxuICAgIHBhZ2Uuc2hvd01vZGFsKFJhY2VNb2RhbCwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlZFwiKTtcbiAgICB9LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0UmFjZShhcmdzKTogdm9pZCB7XG4gICAgbGV0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGxldCBzZW5kZXIgPSA8dmlldy5WaWV3PmFyZ3Mub2JqZWN0O1xuICAgIGxldCBsYWJlbCA9IDxMYWJlbD52aWV3LmdldFZpZXdCeUlkKHNlbmRlci5wYXJlbnQsIHNlbmRlci5pZCk7XG5cbiAgICBjb25zb2xlLmxvZyhhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJykpO1xuICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnX3JhY2VDaG9zZW4nLCBsYWJlbC50ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJykpO1xuXG4gICAgbmF2aWdhdGlvbi5uYXZpZ2F0ZV9jbGFzc19jcmVhdGUoKTtcbn1cblxuZnVuY3Rpb24gaW5pdFJhY2VDaG9zZW4oKTogdm9pZCB7XG4gICAgaWYoIWFwcFNldHRpbmdzLmhhc0tleSgnX3JhY2VDaG9zZW4nKSkge1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJywgJ25vbmUnKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsICdub25lJyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBwYWdlTG9hZGVkLCBuYXZpZ2F0ZUF3YXksIGRpc3BsYXlJbmZvLCBzZWxlY3RSYWNlIH07Il19