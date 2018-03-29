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
                    console.log('Page Loaded');
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
    console.log(chooseState);
    changeSelectionState(page, label);
    console.log(appSettings.getString('_raceChosen'));
    console.log(chooseState);
    console.log('ID = ' + sender.id);
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
function resetBackgroundSelection(page, args) {
    return __awaiter(this, void 0, void 0, function () {
        var sender, index, check, element;
        return __generator(this, function (_a) {
            sender = args.object;
            for (index = 1; index <= dataModel.getLength(); index++) {
                check = '0' + index;
                element = view.getViewById(sender.parent, check);
                console.log(check);
                console.log(element);
                console.log(element.backgroundColor);
                if (element.backgroundColor == highlightColor || element.backgroundColor == undefined) {
                    element.backgroundColor = defaultBGColor;
                    console.log('reset bg color');
                }
            }
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFvRTtBQU1wRSxtQ0FBcUM7QUFHckMsa0RBQW9EO0FBQ3BELHdEQUEwRDtBQUMxRCw4REFBNEQ7QUFDNUQsSUFBTSxTQUFTLEdBQUcsNkJBQTZCLENBQUM7QUFHaEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFDaEMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLElBQUksY0FBYyxHQUFHLG9CQUFvQixDQUFDO0FBQzFDLElBQUksY0FBYyxHQUFHLG9CQUFvQixDQUFDO0FBRzFDLG9CQUEwQixJQUFlOzs7Ozs7b0JBRWpDLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztvQkFFaEMscUJBQU0sU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFBOztvQkFBaEMsU0FBZ0MsQ0FBQztvQkFDakMsY0FBYyxFQUFFLENBQUM7b0JBRWIsTUFBTSxHQUFHLHVCQUFVLENBQUM7d0JBQ3BCLFFBQVEsRUFBRSxVQUFVLENBQUMscUJBQXFCO3dCQUMxQyxRQUFRLEVBQUUsVUFBVSxDQUFDLGFBQWE7d0JBQ2xDLFNBQVMsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO3FCQUNsQyxDQUFDLENBQUM7b0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFFM0Isa0JBQWtCO29CQUNsQix1REFBdUQ7b0JBQ3ZELG9EQUFvRDtvQkFFcEQsa0NBQWtDO29CQUNsQyxJQUFJO29CQUVKLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDOzs7OztDQUVoQztBQW1GUSxnQ0FBVTtBQWpGbkI7OztZQUNJLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7OztDQUNyQjtBQStFb0Isb0NBQVk7QUE3RWpD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QUFTLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxLQUFLLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztZQUN2QyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0tBQ0o7QUFDTCxDQUFDO0FBRUQsa0NBQXdDLElBQVUsRUFBRSxJQUFlOzs7O1lBQzNELE1BQU0sR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLEtBQVEsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNwRCxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztnQkFDcEIsT0FBTyxHQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3JDLElBQUcsT0FBTyxDQUFDLGVBQWUsSUFBSSxjQUFjLElBQUksT0FBTyxDQUFDLGVBQWUsSUFBSSxTQUFTLEVBQUU7b0JBQ2xGLE9BQU8sQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO29CQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQ2pDO2FBQ0o7Ozs7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgUGFnZSwgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd1aS9sYWJlbCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd1aS9idXR0b24nO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uIGZyb20gJy4uLy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBEYXRhTW9kZWwgfSBmcm9tICcuLi8uLi8uLi92aWV3LW1vZGVscy9kYXRhLW1vZGVsJztcbmNvbnN0IFJhY2VNb2RhbCA9ICd2aWV3cy9yYWNlLW1vZGFsL3JhY2UtbW9kYWwnO1xuXG5cbmxldCBkYXRhTW9kZWwgPSBuZXcgRGF0YU1vZGVsKCk7XG5sZXQgY2hvb3NlU3RhdGUgPSBmYWxzZTtcbmxldCBkZWZhdWx0QkdDb2xvciA9ICdyZ2IoMTQ2LCAxNDUsIDE0NSknO1xubGV0IGhpZ2hsaWdodENvbG9yID0gJ3JnYigxNzcsIDEzOCwgMTM4KSc7XG5cblxuYXN5bmMgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGRhdGFNb2RlbDtcblxuICAgIGF3YWl0IGRhdGFNb2RlbC5mZXRjaFJhY2VzRGF0YSgpO1xuICAgIGluaXRSYWNlQ2hvc2VuKCk7XG5cbiAgICBsZXQgc291cmNlID0gZnJvbU9iamVjdCh7XG4gICAgICAgIG5hdl9uZXh0OiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2NsYXNzX2NyZWF0ZSxcbiAgICAgICAgbmF2X2JhY2s6IG5hdmlnYXRpb24ubmF2aWdhdGVfYmFjayxcbiAgICAgICAgcmFjZV9saXN0OiBkYXRhTW9kZWwuZ2V0UmFjZXMoKVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ1BhZ2UgTG9hZGVkJyk7XG4gICAgXG4gICAgLy8gaWYgKHBhZ2UuaW9zKSB7XG4gICAgLy8gICAgIGxldCBjb250cm9sbGVyID0gZnJhbWUudG9wbW9zdCgpLmlvcy5jb250cm9sbGVyO1xuICAgIC8vICAgICBsZXQgbmF2aWdhdGlvbkJhciA9IGNvbnRyb2xsZXIubmF2aWdhdGlvbkJhcjtcblxuICAgIC8vICAgICBuYXZpZ2F0aW9uQmFyLmJhclN0eWxlID0gMTtcbiAgICAvLyB9XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gc291cmNlO1xuICAgIC8vIHJlc2V0QmFja2dyb3VuZFNlbGVjdGlvbihwYWdlLCBhcmdzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGVBd2F5KCkge1xuICAgIGRhdGFNb2RlbC5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW5mbyhhcmdzKTogdm9pZCB7XG4gICAgbGV0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGxldCBzZW5kZXIgPSA8dmlldy5WaWV3PmFyZ3Mub2JqZWN0O1xuXG4gICAgbGV0IGNvbnRleHQgPSB7XG4gICAgICAgIF9yYWNlTmFtZTogc2VuZGVyLmlkXG4gICAgfTtcbiAgICBcbiAgICBwYWdlLnNob3dNb2RhbChSYWNlTW9kYWwsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbG9zZWRcIik7XG4gICAgfSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFJhY2UoYXJncyk6IHZvaWQge1xuICAgIGxldCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBsZXQgc2VuZGVyID0gPHZpZXcuVmlldz5hcmdzLm9iamVjdDtcbiAgICBsZXQgbGFiZWwgPSA8TGFiZWw+dmlldy5nZXRWaWV3QnlJZChzZW5kZXIucGFyZW50LCBzZW5kZXIuaWQpO1xuICAgIGNvbnNvbGUubG9nKGFwcFNldHRpbmdzLmdldFN0cmluZygnX3JhY2VDaG9zZW4nKSk7XG4gICAgY29uc29sZS5sb2coY2hvb3NlU3RhdGUpO1xuICAgIGNoYW5nZVNlbGVjdGlvblN0YXRlKHBhZ2UsIGxhYmVsKTtcbiAgICBjb25zb2xlLmxvZyhhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJykpO1xuICAgIGNvbnNvbGUubG9nKGNob29zZVN0YXRlKTtcbiAgICBjb25zb2xlLmxvZygnSUQgPSAnICsgc2VuZGVyLmlkKTtcbn1cblxuZnVuY3Rpb24gaW5pdFJhY2VDaG9zZW4oKTogdm9pZCB7XG4gICAgaWYoIWFwcFNldHRpbmdzLmhhc0tleSgnX3JhY2VDaG9zZW4nKSkge1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJywgJ25vbmUnKTtcbiAgICAgICAgY2hvb3NlU3RhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsICdub25lJyk7XG4gICAgICAgIGNob29zZVN0YXRlID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VTZWxlY3Rpb25TdGF0ZShwYWdlOiBQYWdlLCBsYWJlbDogTGFiZWwpOiB2b2lkIHtcbiAgICAvLyBJbiBzdGF0ZSBvZiBSYWNlIG5vdCBDaG9zZW5cbiAgICBpZighY2hvb3NlU3RhdGUpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJywgbGFiZWwudGV4dCk7XG4gICAgICAgIGxhYmVsLmJhY2tncm91bmRDb2xvciA9IGhpZ2hsaWdodENvbG9yO1xuICAgICAgICBjaG9vc2VTdGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2V7ICAvLyBJbiBzdGF0ZSBvZiBSYWNlIGFscmVhZHkgQ2hvc2VuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJykgPT0gbGFiZWwudGV4dCl7ICAgICAgICAgICAgICAgICAvLyBVblNlbGVjdGluZ1xuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfcmFjZUNob3NlbicsICdub25lJyk7XG4gICAgICAgICAgICBsYWJlbC5iYWNrZ3JvdW5kQ29sb3IgPSBkZWZhdWx0QkdDb2xvcjtcbiAgICAgICAgICAgIGNob29zZVN0YXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJykgIT0gbGFiZWwudGV4dCl7ICAgICAgICAgICAgLy8gU2VsZWN0aW5nIGEgZGlmZmVyZW50IFxuICAgICAgICAgICAgbGV0IHByZXZpb3VzUmFjZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZygnX3JhY2VDaG9zZW4nKTtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c0lkOiBzdHJpbmcgPSBkYXRhTW9kZWwuZ2V0SWRGcm9tUmFjZShwcmV2aW91c1JhY2UpOyAgICAgLy8gQ291bGQgcG9zc2libHkgbm90IGJlIGluIHRoZSBkYXRhbW9kZWxcbiAgICAgICAgICAgIGxldCBwcmV2aW91c0xhYmVsID0gPExhYmVsPnBhZ2UuZ2V0Vmlld0J5SWQocHJldmlvdXNJZCk7XG4gICAgICAgICAgICBwcmV2aW91c0xhYmVsLmJhY2tncm91bmRDb2xvciA9IGRlZmF1bHRCR0NvbG9yOyAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJywgbGFiZWwudGV4dCk7XG4gICAgICAgICAgICBsYWJlbC5iYWNrZ3JvdW5kQ29sb3IgPSBoaWdobGlnaHRDb2xvcjtcbiAgICAgICAgICAgIGNob29zZVN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzZXRCYWNrZ3JvdW5kU2VsZWN0aW9uKHBhZ2U6IFBhZ2UsIGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBzZW5kZXIgPSA8dmlldy5WaWV3PmFyZ3Mub2JqZWN0O1xuICAgIGZvcihsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBkYXRhTW9kZWwuZ2V0TGVuZ3RoKCk7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IGNoZWNrID0gJzAnICsgaW5kZXg7XG4gICAgICAgIGxldCBlbGVtZW50ID0gPExhYmVsPnZpZXcuZ2V0Vmlld0J5SWQoc2VuZGVyLnBhcmVudCwgY2hlY2spO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGVjayk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgIGlmKGVsZW1lbnQuYmFja2dyb3VuZENvbG9yID09IGhpZ2hsaWdodENvbG9yIHx8IGVsZW1lbnQuYmFja2dyb3VuZENvbG9yID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBkZWZhdWx0QkdDb2xvcjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNldCBiZyBjb2xvcicpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBwYWdlTG9hZGVkLCBuYXZpZ2F0ZUF3YXksIGRpc3BsYXlJbmZvLCBzZWxlY3RSYWNlIH07Il19