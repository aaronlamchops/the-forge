"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var view = require("ui/core/view");
var frame = require("ui/frame");
var appSettings = require("application-settings");
var navigation = require("../navigation/navigation");
var data_model_1 = require("../../view-models/data-model");
var RaceModal = 'views/race-modal/race-modal';
var dataModel = new data_model_1.DataModel();
var chooseState = false;
var defaultBGColor = 'rgb(146, 145, 145)';
var highlightColor = 'rgb(177, 138, 138)';
function pageLoaded(args) {
    return __awaiter(this, void 0, void 0, function () {
        var page, source, controller, navigationBar;
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
                        nav_back: navigation.navigate_back,
                        race_list: dataModel.getRaces()
                    });
                    if (page.ios) {
                        controller = frame.topmost().ios.controller;
                        navigationBar = controller.navigationBar;
                        navigationBar.barStyle = 1;
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFvRTtBQU1wRSxtQ0FBcUM7QUFDckMsZ0NBQWtDO0FBRWxDLGtEQUFvRDtBQUNwRCxxREFBdUQ7QUFDdkQsMkRBQXlEO0FBQ3pELElBQU0sU0FBUyxHQUFHLDZCQUE2QixDQUFDO0FBR2hELElBQUksU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0FBQ2hDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFJLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQztBQUMxQyxJQUFJLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQztBQUcxQyxvQkFBMEIsSUFBZTs7Ozs7O29CQUVqQyxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7b0JBRWhDLHFCQUFNLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBQTs7b0JBQWhDLFNBQWdDLENBQUM7b0JBQ2pDLGNBQWMsRUFBRSxDQUFDO29CQUViLE1BQU0sR0FBRyx1QkFBVSxDQUFDO3dCQUNwQixRQUFRLEVBQUUsVUFBVSxDQUFDLGFBQWE7d0JBQ2xDLFNBQVMsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO3FCQUNsQyxDQUFDLENBQUM7b0JBRUgsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO3dCQUNOLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQzt3QkFDNUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7d0JBRTdDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO3FCQUM5QjtvQkFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Q0FDaEM7QUFnRVEsZ0NBQVU7QUE5RG5COzs7WUFDSSxTQUFTLENBQUMs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ImltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgUGFnZSwgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd1aS9sYWJlbCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd1aS9idXR0b24nO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBEYXRhTW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9kYXRhLW1vZGVsJztcbmNvbnN0IFJhY2VNb2RhbCA9ICd2aWV3cy9yYWNlLW1vZGFsL3JhY2UtbW9kYWwnO1xuXG5cbmxldCBkYXRhTW9kZWwgPSBuZXcgRGF0YU1vZGVsKCk7XG5sZXQgY2hvb3NlU3RhdGUgPSBmYWxzZTtcbmxldCBkZWZhdWx0QkdDb2xvciA9ICdyZ2IoMTQ2LCAxNDUsIDE0NSknO1xubGV0IGhpZ2hsaWdodENvbG9yID0gJ3JnYigxNzcsIDEzOCwgMTM4KSc7XG5cblxuYXN5bmMgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGRhdGFNb2RlbDtcblxuICAgIGF3YWl0IGRhdGFNb2RlbC5mZXRjaFJhY2VzRGF0YSgpO1xuICAgIGluaXRSYWNlQ2hvc2VuKCk7XG5cbiAgICBsZXQgc291cmNlID0gZnJvbU9iamVjdCh7XG4gICAgICAgIG5hdl9iYWNrOiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2JhY2ssXG4gICAgICAgIHJhY2VfbGlzdDogZGF0YU1vZGVsLmdldFJhY2VzKClcbiAgICB9KTtcblxuICAgIGlmIChwYWdlLmlvcykge1xuICAgICAgICBsZXQgY29udHJvbGxlciA9IGZyYW1lLnRvcG1vc3QoKS5pb3MuY29udHJvbGxlcjtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25CYXIgPSBjb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG5cbiAgICAgICAgbmF2aWdhdGlvbkJhci5iYXJTdHlsZSA9IDE7XG4gICAgfVxuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBzb3VyY2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlQXdheSgpIHtcbiAgICBkYXRhTW9kZWwucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUluZm8oYXJncyk6IHZvaWQge1xuICAgIGxldCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBsZXQgc2VuZGVyID0gPHZpZXcuVmlldz5hcmdzLm9iamVjdDtcbiAgICBsZXQgbGFiZWwgPSA8TGFiZWw+dmlldy5nZXRWaWV3QnlJZChzZW5kZXIucGFyZW50LCBzZW5kZXIuaWQpO1xuXG4gICAgbGV0IGNvbnRleHQgPSB7XG4gICAgICAgIF9yYWNlTmFtZTogbGFiZWwudGV4dFxuICAgIH07XG4gICAgXG4gICAgcGFnZS5zaG93TW9kYWwoUmFjZU1vZGFsLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VkXCIpO1xuICAgIH0sIHRydWUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RSYWNlKGFyZ3MpOiB2b2lkIHtcbiAgICBsZXQgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0LnBhZ2U7XG4gICAgbGV0IHNlbmRlciA9IDx2aWV3LlZpZXc+YXJncy5vYmplY3Q7XG4gICAgbGV0IGxhYmVsID0gPExhYmVsPnZpZXcuZ2V0Vmlld0J5SWQoc2VuZGVyLnBhcmVudCwgc2VuZGVyLmlkKTtcbiAgICBjaGFuZ2VTZWxlY3Rpb25TdGF0ZShwYWdlLCBsYWJlbCk7XG59XG5cbmZ1bmN0aW9uIGluaXRSYWNlQ2hvc2VuKCk6IHZvaWQge1xuICAgIGlmKCFhcHBTZXR0aW5ncy5oYXNLZXkoJ19yYWNlQ2hvc2VuJykpIHtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsICdub25lJyk7XG4gICAgICAgIGNob29zZVN0YXRlID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnX3JhY2VDaG9zZW4nLCAnbm9uZScpO1xuICAgICAgICBjaG9vc2VTdGF0ZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU2VsZWN0aW9uU3RhdGUocGFnZTogUGFnZSwgbGFiZWw6IExhYmVsKTogdm9pZCB7XG4gICAgLy8gSW4gc3RhdGUgb2YgUmFjZSBub3QgQ2hvc2VuXG4gICAgaWYoIWNob29zZVN0YXRlKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsIGxhYmVsLnRleHQpO1xuICAgICAgICBsYWJlbC5iYWNrZ3JvdW5kQ29sb3IgPSBoaWdobGlnaHRDb2xvcjtcbiAgICAgICAgY2hvb3NlU3RhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNleyAgLy8gSW4gc3RhdGUgb2YgUmFjZSBhbHJlYWR5IENob3NlbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdfcmFjZUNob3NlbicpID09IGxhYmVsLnRleHQpeyAgICAgICAgICAgICAgICAgLy8gVW5TZWxlY3RpbmdcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnX3JhY2VDaG9zZW4nLCAnbm9uZScpO1xuICAgICAgICAgICAgbGFiZWwuYmFja2dyb3VuZENvbG9yID0gZGVmYXVsdEJHQ29sb3I7XG4gICAgICAgICAgICBjaG9vc2VTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdfcmFjZUNob3NlbicpICE9IGxhYmVsLnRleHQpeyAgICAgICAgICAgIC8vIFNlbGVjdGluZyBhIGRpZmZlcmVudCBcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1JhY2UgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJyk7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNJZDogc3RyaW5nID0gZGF0YU1vZGVsLmdldElkRnJvbVJhY2UocHJldmlvdXNSYWNlKTsgICAgIC8vIENvdWxkIHBvc3NpYmx5IG5vdCBiZSBpbiB0aGUgZGF0YW1vZGVsXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNMYWJlbCA9IDxMYWJlbD5wYWdlLmdldFZpZXdCeUlkKHByZXZpb3VzSWQpO1xuICAgICAgICAgICAgcHJldmlvdXNMYWJlbC5iYWNrZ3JvdW5kQ29sb3IgPSBkZWZhdWx0QkdDb2xvcjsgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsIGxhYmVsLnRleHQpO1xuICAgICAgICAgICAgbGFiZWwuYmFja2dyb3VuZENvbG9yID0gaGlnaGxpZ2h0Q29sb3I7XG4gICAgICAgICAgICBjaG9vc2VTdGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkZWQsIG5hdmlnYXRlQXdheSwgZGlzcGxheUluZm8sIHNlbGVjdFJhY2UgfTsiXX0=