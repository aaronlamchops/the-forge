"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var http = require("http");
var race_1 = require("../models/race");
/*

TODO:
- Rename file to raceViewModel.ts and update all files that use it
- Change structure and data model to be more like the class model
- Create the model for all things related in Race

*/
var DataModel = /** @class */ (function (_super) {
    __extends(DataModel, _super);
    function DataModel() {
        var _this = _super.call(this) || this;
        _this.races = new observable_array_1.ObservableArray();
        return _this;
    }
    DataModel.prototype.getRaces = function () {
        return this.races;
    };
    DataModel.prototype.getRaceByName = function (name) {
        var data;
        this.races.forEach(function (element) {
            if (element.name == name) {
                data = element;
            }
        });
        return data;
    };
    DataModel.prototype.getIdFromRace = function (race) {
        var id = '-1';
        this.races.forEach(function (element) {
            if (element.name == race) {
                id = element.id;
            }
        });
        return id; // Will need to implement error handling later
    };
    DataModel.prototype.getLength = function () {
        return this.races.length;
    };
    DataModel.prototype.fetchRacesData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, http.getJSON('https://theforge-api.herokuapp.com/api/v1/races').then(function (result) {
                            result.forEach(function (race) {
                                try {
                                    _this.races.push(new race_1.Race(race.id, race.name, race.abilityScore, race.age, race.alignment, race.size, race.sizeDescription, race.speed, race.language));
                                }
                                catch (err) {
                                    console.log(err);
                                }
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataModel.prototype.reset = function () {
        this.races = new observable_array_1.ObservableArray();
    };
    return DataModel;
}(observable_1.Observable));
exports.DataModel = DataModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBd0Q7QUFDeEQsMERBQXdEO0FBQ3hELDJCQUE2QjtBQUU3Qix1Q0FBc0M7QUFFdEM7Ozs7Ozs7RUFPRTtBQUdGO0lBQStCLDZCQUFVO0lBSXJDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtDQUFlLEVBQVEsQ0FBQzs7SUFDN0MsQ0FBQztJQUVNLDRCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLGlDQUFhLEdBQXBCLFVBQXFCLElBQVk7UUFDN0IsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsSUFBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDckIsSUFBSSxHQUFHLE9BQU8sQ0FBQzthQUNsQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGlDQUFhLEdBQXBCLFVBQXFCLElBQVk7UUFDN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3RCLElBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUM7Z0JBQ3BCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBWSxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEVBQUUsQ0FBQyxDQUFnQyw4Q0FBOEM7SUFDNUYsQ0FBQztJQUVNLDZCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRVksa0NBQWMsR0FBM0I7Ozs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsaURBQWlELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFxQjs0QkFDN0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVM7Z0NBQ3JCLElBQUk7b0NBQ0EsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lDQUMxSjtnQ0FDRCxPQUFPLEdBQUcsRUFBRTtvQ0FDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lDQUNwQjs0QkFDTCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUMsRUFBQTs7d0JBVEYsU0FTRSxDQUFDOzs7OztLQUNOO0lBRU0seUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBZSxFQUFRLENBQUM7SUFDN0MsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXRERCxDQUErQix1QkFBVSxHQXNEeEM7QUF0RFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5cbmltcG9ydCB7IFJhY2UgfSBmcm9tICcuLi9tb2RlbHMvcmFjZSc7XG5cbi8qXG5cblRPRE86XG4tIFJlbmFtZSBmaWxlIHRvIHJhY2VWaWV3TW9kZWwudHMgYW5kIHVwZGF0ZSBhbGwgZmlsZXMgdGhhdCB1c2UgaXRcbi0gQ2hhbmdlIHN0cnVjdHVyZSBhbmQgZGF0YSBtb2RlbCB0byBiZSBtb3JlIGxpa2UgdGhlIGNsYXNzIG1vZGVsXG4tIENyZWF0ZSB0aGUgbW9kZWwgZm9yIGFsbCB0aGluZ3MgcmVsYXRlZCBpbiBSYWNlXG5cbiovXG5cblxuZXhwb3J0IGNsYXNzIERhdGFNb2RlbCBleHRlbmRzIE9ic2VydmFibGV7XG5cbiAgICBwdWJsaWMgcmFjZXM6IE9ic2VydmFibGVBcnJheTxSYWNlPjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5yYWNlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UmFjZT4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmFjZXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFjZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJhY2VCeU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICB0aGlzLnJhY2VzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50Lm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldElkRnJvbVJhY2UocmFjZTogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICBsZXQgaWQgPSAnLTEnO1xuICAgICAgICB0aGlzLnJhY2VzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50Lm5hbWUgPT0gcmFjZSl7XG4gICAgICAgICAgICAgICAgaWQgPSBlbGVtZW50LmlkIGFzIHN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpZDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdpbGwgbmVlZCB0byBpbXBsZW1lbnQgZXJyb3IgaGFuZGxpbmcgbGF0ZXJcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhY2VzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZmV0Y2hSYWNlc0RhdGEoKXtcbiAgICAgICAgYXdhaXQgaHR0cC5nZXRKU09OKCdodHRwczovL3RoZWZvcmdlLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9yYWNlcycpLnRoZW4oKHJlc3VsdDogQXJyYXk8b2JqZWN0PikgPT57XG4gICAgICAgICAgICByZXN1bHQuZm9yRWFjaCgocmFjZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWNlcy5wdXNoKG5ldyBSYWNlKHJhY2UuaWQsIHJhY2UubmFtZSwgcmFjZS5hYmlsaXR5U2NvcmUsIHJhY2UuYWdlLCByYWNlLmFsaWdubWVudCwgcmFjZS5zaXplLCByYWNlLnNpemVEZXNjcmlwdGlvbiwgcmFjZS5zcGVlZCwgcmFjZS5sYW5ndWFnZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5yYWNlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UmFjZT4oKTtcbiAgICB9XG59Il19