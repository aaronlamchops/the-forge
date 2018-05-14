"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var race_1 = require("../models/races/race");
/*

TODO:
- Rename file to raceViewModel.ts and update all files that use it
- Change structure and data model to be more like the class model
- Create the model for all things related in Race

*/
var RaceViewModel = /** @class */ (function (_super) {
    __extends(RaceViewModel, _super);
    function RaceViewModel() {
        var _this = _super.call(this) || this;
        _this.races = new observable_array_1.ObservableArray();
        return _this;
    }
    RaceViewModel.prototype.getRaces = function () {
        return this.races;
    };
    RaceViewModel.prototype.getRaceByName = function (name) {
        var data;
        this.races.forEach(function (element) {
            if (element.name == name) {
                data = element;
            }
        });
        return data;
    };
    RaceViewModel.prototype.getIdFromRace = function (race) {
        var id = '-1';
        this.races.forEach(function (element) {
            if (element.name == race) {
                id = element.id;
            }
        });
        return id; // Will need to implement error handling later
    };
    RaceViewModel.prototype.getLength = function () {
        return this.races.length;
    };
    RaceViewModel.prototype.fetchRacesData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, race;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://theforge-api.herokuapp.com/api/v1/races')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        race = _a.sent();
                        return [2 /*return*/, race];
                }
            });
        });
    };
    RaceViewModel.prototype.resolveRaceData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchRacesData()
                            .then(function (data) {
                            data.forEach(function (element) {
                                var race = new race_1.Race(element['id'], element['name'], element['abilityScore'], element['age'], element['alignment'], element['size'], element['sizeDescription'], element['speed'], element['language']);
                                _this.races.push(race);
                            });
                        })
                            .catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RaceViewModel.prototype.reset = function () {
        this.races = new observable_array_1.ObservableArray();
    };
    return RaceViewModel;
}(observable_1.Observable));
exports.RaceViewModel = RaceViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFjZVZpZXdNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhY2VWaWV3TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBd0Q7QUFDeEQsMERBQXdEO0FBRXhELDZDQUE0QztBQUU1Qzs7Ozs7OztFQU9FO0FBR0Y7SUFBbUMsaUNBQVU7SUFJekM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsRUFBUSxDQUFDOztJQUM3QyxDQUFDO0lBRU0sZ0NBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0scUNBQWEsR0FBcEIsVUFBcUIsSUFBWTtRQUM3QixJQUFJLElBQUksQ0FBQztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN0QixJQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNyQixJQUFJLEdBQUcsT0FBTyxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0scUNBQWEsR0FBcEIsVUFBcUIsSUFBWTtRQUM3QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsSUFBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztnQkFDcEIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFZLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxDQUFDLENBQWdDLDhDQUE4QztJQUM1RixDQUFDO0lBRU0saUNBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFWSxzQ0FBYyxHQUEzQjs7Ozs7NEJBQ21CLHFCQUFNLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxFQUFBOzt3QkFBekUsUUFBUSxHQUFHLFNBQThEO3dCQUNsRSxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE1QixJQUFJLEdBQUcsU0FBcUI7d0JBQ2hDLHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBRVksdUNBQWUsR0FBNUI7Ozs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7NkJBQ3RCLElBQUksQ0FBQyxVQUFBLElBQUk7NEJBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQVk7Z0NBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUN2RCxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFDckQsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dDQUN2RixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDMUIsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDOzZCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7NEJBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckIsQ0FBQyxDQUFDLEVBQUE7O3dCQVhOLFNBV00sQ0FBQzs7Ozs7S0FDVjtJQUVNLDZCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsRUFBUSxDQUFDO0lBQzdDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUE5REQsQ0FBbUMsdUJBQVUsR0E4RDVDO0FBOURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IHsgUmFjZSB9IGZyb20gJy4uL21vZGVscy9yYWNlcy9yYWNlJztcblxuLypcblxuVE9ETzpcbi0gUmVuYW1lIGZpbGUgdG8gcmFjZVZpZXdNb2RlbC50cyBhbmQgdXBkYXRlIGFsbCBmaWxlcyB0aGF0IHVzZSBpdFxuLSBDaGFuZ2Ugc3RydWN0dXJlIGFuZCBkYXRhIG1vZGVsIHRvIGJlIG1vcmUgbGlrZSB0aGUgY2xhc3MgbW9kZWxcbi0gQ3JlYXRlIHRoZSBtb2RlbCBmb3IgYWxsIHRoaW5ncyByZWxhdGVkIGluIFJhY2VcblxuKi9cblxuXG5leHBvcnQgY2xhc3MgUmFjZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGV7XG5cbiAgICBwcml2YXRlIHJhY2VzOiBPYnNlcnZhYmxlQXJyYXk8UmFjZT47XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMucmFjZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFJhY2U+KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJhY2VzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJhY2VzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSYWNlQnlOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgdGhpcy5yYWNlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJZEZyb21SYWNlKHJhY2U6IHN0cmluZyk6IHN0cmluZ3tcbiAgICAgICAgbGV0IGlkID0gJy0xJztcbiAgICAgICAgdGhpcy5yYWNlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudC5uYW1lID09IHJhY2Upe1xuICAgICAgICAgICAgICAgIGlkID0gZWxlbWVudC5pZCBhcyBzdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaWQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaWxsIG5lZWQgdG8gaW1wbGVtZW50IGVycm9yIGhhbmRsaW5nIGxhdGVyXG4gICAgfVxuXG4gICAgcHVibGljIGdldExlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWNlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGZldGNoUmFjZXNEYXRhKCl7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3RoZWZvcmdlLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9yYWNlcycpO1xuICAgICAgICBsZXQgcmFjZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJhY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJlc29sdmVSYWNlRGF0YSgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5mZXRjaFJhY2VzRGF0YSgpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFjZSA9IG5ldyBSYWNlKGVsZW1lbnRbJ2lkJ10sIGVsZW1lbnRbJ25hbWUnXSwgZWxlbWVudFsnYWJpbGl0eVNjb3JlJ10sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbJ2FnZSddLCBlbGVtZW50WydhbGlnbm1lbnQnXSwgZWxlbWVudFsnc2l6ZSddLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50WydzaXplRGVzY3JpcHRpb24nXSwgZWxlbWVudFsnc3BlZWQnXSwgZWxlbWVudFsnbGFuZ3VhZ2UnXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFjZXMucHVzaChyYWNlKTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucmFjZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFJhY2U+KCk7XG4gICAgfVxufSJdfQ==