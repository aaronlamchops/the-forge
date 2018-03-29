"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var view = require("ui/core/view");
var appSettings = require("application-settings");
var navigation = require("../../navigation/navigation");
var data_model_1 = require("../../../view-models/data-model");
var RaceModal = 'views/race-modal/race-modal';
var dataModel = new data_model_1.DataModel();
var chooseState = false;
var defaultBGColor = 'rgb(146, 145, 145)';
var highlightColor = 'rgb(177, 138, 138)';
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
                    // if (page.ios) {
                    //     let controller = frame.topmost().ios.controller;
                    //     let navigationBar = controller.navigationBar;
                    //     navigationBar.barStyle = 1;
                    // }
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
    var label = view.getViewById(sender.parent, sender.id);
    var context = {
        _raceName: label.text
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
    changeSelectionState(page, label);
}
exports.selectRace = selectRace;
function initRaceChosen() {
    if (!appSettings.hasKey('_raceChosen')) {
        appSettings.setString('_raceChosen', 'none');
        chooseState = false;
    }
    else {
        appSettings.setString('_raceChosen', 'none');
        chooseState = false;
    }
}
function changeSelectionState(page, label) {
    // In state of Race not Chosen
    if (!chooseState) {
        appSettings.setString('_raceChosen', label.text);
        label.backgroundColor = highlightColor;
        chooseState = true;
    }
    else { // In state of Race already Chosen                                                                                  
        if (appSettings.getString('_raceChosen') == label.text) { // UnSelecting
            appSettings.setString('_raceChosen', 'none');
            label.backgroundColor = defaultBGColor;
            chooseState = false;
        }
        else if (appSettings.getString('_raceChosen') != label.text) { // Selecting a different 
            var previousRace = appSettings.getString('_raceChosen');
            var previousId = dataModel.getIdFromRace(previousRace); // Could possibly not be in the datamodel
            var previousLabel = page.getViewById(previousId);
            previousLabel.backgroundColor = defaultBGColor;
            appSettings.setString('_raceChosen', label.text);
            label.backgroundColor = highlightColor;
            chooseState = true;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3MtY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQW9FO0FBTXBFLG1DQUFxQztBQUdyQyxrREFBb0Q7QUFDcEQsd0RBQTBEO0FBQzFELDhEQUE0RDtBQUM1RCxJQUFNLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQztBQUdoRCxJQUFJLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztBQUNoQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDeEIsSUFBSSxjQUFjLEdBQUcsb0JBQW9CLENBQUM7QUFDMUMsSUFBSSxjQUFjLEdBQUcsb0JBQW9CLENBQUM7QUFHMUMsb0JBQTBCLElBQWU7Ozs7OztvQkFFakMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO29CQUVoQyxxQkFBTSxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUE7O29CQUFoQyxTQUFnQyxDQUFDO29CQUNqQyxjQUFjLEVBQUUsQ0FBQztvQkFFYixNQUFNLEdBQUcsdUJBQVUsQ0FBQzt3QkFDcEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxxQkFBcUI7d0JBQzFDLFFBQVEsRUFBRSxVQUFVLENBQUMsYUFBYTt3QkFDbEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7cUJBQ2xDLENBQUMsQ0FBQztvQkFFSCxrQkFBa0I7b0JBQ2xCLHVEQUF1RDtvQkFDdkQsb0RBQW9EO29CQUVwRCxrQ0FBa0M7b0JBQ2xDLElBQUk7b0JBRUosSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7Ozs7O0NBQ2hDO0FBZ0VRLGdDQUFVO0FBOURuQjs7O1lBQ0ksU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7O0NBQ3JCO0FBNERvQixvQ0FBWTtBQTFEakMscUJBQXFCLElBQUk7SUFDckIsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDeEMsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTlELElBQUksT0FBTyxHQUFHO1FBQ1YsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJO0tBQ3hCLENBQUM7SUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixDQUFDO0FBOENrQyxrQ0FBVztBQTVDOUMsb0JBQW9CLElBQUk7SUFDcEIsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDeEMsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlELG9CQUFvQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBdUMrQyxnQ0FBVTtBQXJDMUQ7SUFDSSxJQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCO1NBQ0c7UUFDQSxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCO0FBQ0wsQ0FBQztBQUVELDhCQUE4QixJQUFVLEVBQUUsS0FBWTtJQUNsRCw4QkFBOEI7SUFDOUIsSUFBRyxDQUFDLFdBQVcsRUFBQztRQUNaLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxLQUFLLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN2QyxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ3RCO1NBQ0csRUFBRyxvSEFBb0g7UUFDdkgsSUFBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUMsRUFBa0IsY0FBYztZQUNsRixXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QyxLQUFLLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztZQUN2QyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQ0ksSUFBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUMsRUFBYSx5QkFBeUI7WUFDN0YsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RCxJQUFJLFVBQVUsR0FBVyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUsseUNBQXlDO1lBQzdHLElBQUksYUFBYSxHQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEQsYUFBYSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7WUFFL0MsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELEtBQUssQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1lBQ3ZDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDdEI7S0FDSjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IFBhZ2UsIENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndWkvbGFiZWwnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndWkvYnV0dG9uJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5pbXBvcnQgKiBhcyB2aWV3IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgbmF2aWdhdGlvbiBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgRGF0YU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vdmlldy1tb2RlbHMvZGF0YS1tb2RlbCc7XG5jb25zdCBSYWNlTW9kYWwgPSAndmlld3MvcmFjZS1tb2RhbC9yYWNlLW1vZGFsJztcblxuXG5sZXQgZGF0YU1vZGVsID0gbmV3IERhdGFNb2RlbCgpO1xubGV0IGNob29zZVN0YXRlID0gZmFsc2U7XG5sZXQgZGVmYXVsdEJHQ29sb3IgPSAncmdiKDE0NiwgMTQ1LCAxNDUpJztcbmxldCBoaWdobGlnaHRDb2xvciA9ICdyZ2IoMTc3LCAxMzgsIDEzOCknO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG5cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBkYXRhTW9kZWw7XG5cbiAgICBhd2FpdCBkYXRhTW9kZWwuZmV0Y2hSYWNlc0RhdGEoKTtcbiAgICBpbml0UmFjZUNob3NlbigpO1xuXG4gICAgbGV0IHNvdXJjZSA9IGZyb21PYmplY3Qoe1xuICAgICAgICBuYXZfbmV4dDogbmF2aWdhdGlvbi5uYXZpZ2F0ZV9jbGFzc19jcmVhdGUsXG4gICAgICAgIG5hdl9iYWNrOiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2JhY2ssXG4gICAgICAgIHJhY2VfbGlzdDogZGF0YU1vZGVsLmdldFJhY2VzKClcbiAgICB9KTtcblxuICAgIC8vIGlmIChwYWdlLmlvcykge1xuICAgIC8vICAgICBsZXQgY29udHJvbGxlciA9IGZyYW1lLnRvcG1vc3QoKS5pb3MuY29udHJvbGxlcjtcbiAgICAvLyAgICAgbGV0IG5hdmlnYXRpb25CYXIgPSBjb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG5cbiAgICAvLyAgICAgbmF2aWdhdGlvbkJhci5iYXJTdHlsZSA9IDE7XG4gICAgLy8gfVxuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBzb3VyY2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlQXdheSgpIHtcbiAgICBkYXRhTW9kZWwucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUluZm8oYXJncyk6IHZvaWQge1xuICAgIGxldCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBsZXQgc2VuZGVyID0gPHZpZXcuVmlldz5hcmdzLm9iamVjdDtcbiAgICBsZXQgbGFiZWwgPSA8TGFiZWw+dmlldy5nZXRWaWV3QnlJZChzZW5kZXIucGFyZW50LCBzZW5kZXIuaWQpO1xuXG4gICAgbGV0IGNvbnRleHQgPSB7XG4gICAgICAgIF9yYWNlTmFtZTogbGFiZWwudGV4dFxuICAgIH07XG4gICAgXG4gICAgcGFnZS5zaG93TW9kYWwoUmFjZU1vZGFsLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VkXCIpO1xuICAgIH0sIHRydWUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RSYWNlKGFyZ3MpOiB2b2lkIHtcbiAgICBsZXQgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0LnBhZ2U7XG4gICAgbGV0IHNlbmRlciA9IDx2aWV3LlZpZXc+YXJncy5vYmplY3Q7XG4gICAgbGV0IGxhYmVsID0gPExhYmVsPnZpZXcuZ2V0Vmlld0J5SWQoc2VuZGVyLnBhcmVudCwgc2VuZGVyLmlkKTtcbiAgICBjaGFuZ2VTZWxlY3Rpb25TdGF0ZShwYWdlLCBsYWJlbCk7XG59XG5cbmZ1bmN0aW9uIGluaXRSYWNlQ2hvc2VuKCk6IHZvaWQge1xuICAgIGlmKCFhcHBTZXR0aW5ncy5oYXNLZXkoJ19yYWNlQ2hvc2VuJykpIHtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsICdub25lJyk7XG4gICAgICAgIGNob29zZVN0YXRlID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnX3JhY2VDaG9zZW4nLCAnbm9uZScpO1xuICAgICAgICBjaG9vc2VTdGF0ZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU2VsZWN0aW9uU3RhdGUocGFnZTogUGFnZSwgbGFiZWw6IExhYmVsKTogdm9pZCB7XG4gICAgLy8gSW4gc3RhdGUgb2YgUmFjZSBub3QgQ2hvc2VuXG4gICAgaWYoIWNob29zZVN0YXRlKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsIGxhYmVsLnRleHQpO1xuICAgICAgICBsYWJlbC5iYWNrZ3JvdW5kQ29sb3IgPSBoaWdobGlnaHRDb2xvcjtcbiAgICAgICAgY2hvb3NlU3RhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNleyAgLy8gSW4gc3RhdGUgb2YgUmFjZSBhbHJlYWR5IENob3NlbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdfcmFjZUNob3NlbicpID09IGxhYmVsLnRleHQpeyAgICAgICAgICAgICAgICAgLy8gVW5TZWxlY3RpbmdcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnX3JhY2VDaG9zZW4nLCAnbm9uZScpO1xuICAgICAgICAgICAgbGFiZWwuYmFja2dyb3VuZENvbG9yID0gZGVmYXVsdEJHQ29sb3I7XG4gICAgICAgICAgICBjaG9vc2VTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdfcmFjZUNob3NlbicpICE9IGxhYmVsLnRleHQpeyAgICAgICAgICAgIC8vIFNlbGVjdGluZyBhIGRpZmZlcmVudCBcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1JhY2UgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJyk7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNJZDogc3RyaW5nID0gZGF0YU1vZGVsLmdldElkRnJvbVJhY2UocHJldmlvdXNSYWNlKTsgICAgIC8vIENvdWxkIHBvc3NpYmx5IG5vdCBiZSBpbiB0aGUgZGF0YW1vZGVsXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNMYWJlbCA9IDxMYWJlbD5wYWdlLmdldFZpZXdCeUlkKHByZXZpb3VzSWQpO1xuICAgICAgICAgICAgcHJldmlvdXNMYWJlbC5iYWNrZ3JvdW5kQ29sb3IgPSBkZWZhdWx0QkdDb2xvcjsgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsIGxhYmVsLnRleHQpO1xuICAgICAgICAgICAgbGFiZWwuYmFja2dyb3VuZENvbG9yID0gaGlnaGxpZ2h0Q29sb3I7XG4gICAgICAgICAgICBjaG9vc2VTdGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkZWQsIG5hdmlnYXRlQXdheSwgZGlzcGxheUluZm8sIHNlbGVjdFJhY2UgfTsiXX0=