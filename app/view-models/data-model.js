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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBd0Q7QUFDeEQsMERBQXdEO0FBQ3hELDJCQUE2QjtBQUU3Qix1Q0FBc0M7QUFHdEM7SUFBK0IsNkJBQVU7SUFJckM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsRUFBUSxDQUFDOztJQUM3QyxDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRVksa0NBQWMsR0FBM0I7Ozs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFxQjs0QkFDL0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVM7Z0NBQ3JCLElBQUk7b0NBQ0EsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lDQUMxSjtnQ0FDRCxPQUFPLEdBQUcsRUFBRTtvQ0FDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lDQUNwQjs0QkFDTCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUMsRUFBQTs7d0JBVEYsU0FTRSxDQUFDOzs7OztLQUNOO0lBRU0seUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBZSxFQUFRLENBQUM7SUFDN0MsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUErQix1QkFBVSxHQThCeEM7QUE5QlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5cbmltcG9ydCB7IFJhY2UgfSBmcm9tICcuLi9tb2RlbHMvcmFjZSc7XG5cblxuZXhwb3J0IGNsYXNzIERhdGFNb2RlbCBleHRlbmRzIE9ic2VydmFibGV7XG5cbiAgICBwdWJsaWMgcmFjZXM6IE9ic2VydmFibGVBcnJheTxSYWNlPjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5yYWNlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UmFjZT4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmFjZXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFjZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGZldGNoUmFjZXNEYXRhKCl7XG4gICAgICAgIGF3YWl0IGh0dHAuZ2V0SlNPTignaHR0cHM6Ly9hcGkubXlqc29uLmNvbS9iaW5zL2J3cnh4JykudGhlbigocmVzdWx0OiBBcnJheTxvYmplY3Q+KSA9PntcbiAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKChyYWNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhY2VzLnB1c2gobmV3IFJhY2UocmFjZS5pZCwgcmFjZS5uYW1lLCByYWNlLmFiaWxpdHlTY29yZSwgcmFjZS5hZ2UsIHJhY2UuYWxpZ25tZW50LCByYWNlLnNpemUsIHJhY2Uuc2l6ZURlc2NyaXB0aW9uLCByYWNlLnNwZWVkLCByYWNlLmxhbmd1YWdlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnJhY2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxSYWNlPigpO1xuICAgIH1cbn0iXX0=