"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var http = require("http");
var race_1 = require("../models/race");
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
    DataModel.prototype.getIdFromRace = function (race) {
        var id = '-1';
        this.races.forEach(function (element) {
            if (element.name == race) {
                id = element.id;
            }
        });
        return id; // Will need to implement error handling later
    };
    DataModel.prototype.fetchRacesData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, http.getJSON('https://api.myjson.com/bins/bwrxx').then(function (result) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBd0Q7QUFDeEQsMERBQXdEO0FBQ3hELDJCQUE2QjtBQUU3Qix1Q0FBc0M7QUFHdEM7SUFBK0IsNkJBQVU7SUFJckM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsRUFBUSxDQUFDOztJQUM3QyxDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0saUNBQWEsR0FBcEIsVUFBcUIsSUFBWTtRQUM3QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsSUFBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztnQkFDcEIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFZLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxDQUFDLENBQWdDLDhDQUE4QztJQUM1RixDQUFDO0lBRVksa0NBQWMsR0FBM0I7Ozs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFxQjs0QkFDL0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVM7Z0NBQ3JCLElBQUk7b0NBQ0EsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lDQUMxSjtnQ0FDRCxPQUFPLEdBQUcsRUFBRTtvQ0FDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lDQUNwQjs0QkFDTCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUMsRUFBQTs7d0JBVEYsU0FTRSxDQUFDOzs7OztLQUNOO0lBRU0seUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBZSxFQUFRLENBQUM7SUFDN0MsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUErQix1QkFBVSxHQXdDeEM7QUF4Q1ksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5cbmltcG9ydCB7IFJhY2UgfSBmcm9tICcuLi9tb2RlbHMvcmFjZSc7XG5cblxuZXhwb3J0IGNsYXNzIERhdGFNb2RlbCBleHRlbmRzIE9ic2VydmFibGV7XG5cbiAgICBwdWJsaWMgcmFjZXM6IE9ic2VydmFibGVBcnJheTxSYWNlPjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5yYWNlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UmFjZT4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmFjZXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFjZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldElkRnJvbVJhY2UocmFjZTogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICBsZXQgaWQgPSAnLTEnO1xuICAgICAgICB0aGlzLnJhY2VzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50Lm5hbWUgPT0gcmFjZSl7XG4gICAgICAgICAgICAgICAgaWQgPSBlbGVtZW50LmlkIGFzIHN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpZDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdpbGwgbmVlZCB0byBpbXBsZW1lbnQgZXJyb3IgaGFuZGxpbmcgbGF0ZXJcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZmV0Y2hSYWNlc0RhdGEoKXtcbiAgICAgICAgYXdhaXQgaHR0cC5nZXRKU09OKCdodHRwczovL2FwaS5teWpzb24uY29tL2JpbnMvYndyeHgnKS50aGVuKChyZXN1bHQ6IEFycmF5PG9iamVjdD4pID0+e1xuICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goKHJhY2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFjZXMucHVzaChuZXcgUmFjZShyYWNlLmlkLCByYWNlLm5hbWUsIHJhY2UuYWJpbGl0eVNjb3JlLCByYWNlLmFnZSwgcmFjZS5hbGlnbm1lbnQsIHJhY2Uuc2l6ZSwgcmFjZS5zaXplRGVzY3JpcHRpb24sIHJhY2Uuc3BlZWQsIHJhY2UubGFuZ3VhZ2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucmFjZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFJhY2U+KCk7XG4gICAgfVxufSJdfQ==