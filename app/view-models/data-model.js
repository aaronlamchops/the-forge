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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBd0Q7QUFDeEQsMERBQXdEO0FBQ3hELDJCQUE2QjtBQUU3Qix1Q0FBc0M7QUFHdEM7SUFBK0IsNkJBQVU7SUFJckM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsRUFBUSxDQUFDOztJQUM3QyxDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0saUNBQWEsR0FBcEIsVUFBcUIsSUFBWTtRQUM3QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsSUFBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztnQkFDcEIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFZLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxDQUFDLENBQWdDLDhDQUE4QztJQUM1RixDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFWSxrQ0FBYyxHQUEzQjs7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQXFCOzRCQUM3RixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBUztnQ0FDckIsSUFBSTtvQ0FDQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUNBQzFKO2dDQUNELE9BQU8sR0FBRyxFQUFFO29DQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUNBQ3BCOzRCQUNMLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQyxFQUFBOzt3QkFURixTQVNFLENBQUM7Ozs7O0tBQ047SUFFTSx5QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtDQUFlLEVBQVEsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBNUNELENBQStCLHVCQUFVLEdBNEN4QztBQTVDWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcblxuaW1wb3J0IHsgUmFjZSB9IGZyb20gJy4uL21vZGVscy9yYWNlJztcblxuXG5leHBvcnQgY2xhc3MgRGF0YU1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZXtcblxuICAgIHB1YmxpYyByYWNlczogT2JzZXJ2YWJsZUFycmF5PFJhY2U+O1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnJhY2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxSYWNlPigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSYWNlcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5yYWNlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SWRGcm9tUmFjZShyYWNlOiBzdHJpbmcpOiBzdHJpbmd7XG4gICAgICAgIGxldCBpZCA9ICctMSc7XG4gICAgICAgIHRoaXMucmFjZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQubmFtZSA9PSByYWNlKXtcbiAgICAgICAgICAgICAgICBpZCA9IGVsZW1lbnQuaWQgYXMgc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGlkOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2lsbCBuZWVkIHRvIGltcGxlbWVudCBlcnJvciBoYW5kbGluZyBsYXRlclxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFjZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBmZXRjaFJhY2VzRGF0YSgpe1xuICAgICAgICBhd2FpdCBodHRwLmdldEpTT04oJ2h0dHBzOi8vdGhlZm9yZ2UtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3JhY2VzJykudGhlbigocmVzdWx0OiBBcnJheTxvYmplY3Q+KSA9PntcbiAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKChyYWNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhY2VzLnB1c2gobmV3IFJhY2UocmFjZS5pZCwgcmFjZS5uYW1lLCByYWNlLmFiaWxpdHlTY29yZSwgcmFjZS5hZ2UsIHJhY2UuYWxpZ25tZW50LCByYWNlLnNpemUsIHJhY2Uuc2l6ZURlc2NyaXB0aW9uLCByYWNlLnNwZWVkLCByYWNlLmxhbmd1YWdlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnJhY2VzID0gbmV3IE9ic2VydmFibGVBcnJheTxSYWNlPigpO1xuICAgIH1cbn0iXX0=