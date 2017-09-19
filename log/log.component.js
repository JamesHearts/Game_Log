"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var log_service_1 = require("./log.service");
var LogComponent = (function () {
    function LogComponent(_logService) {
        this._logService = _logService;
        this.pageTitle = 'Video Game Log';
        this.imageWidth = 100;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = '';
    }
    LogComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    LogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._logService.getEntries()
            .subscribe(function (entries) { return _this.entries = entries; }, function (error) { return _this.errorMessage = error; });
    };
    LogComponent.prototype.onRatingClicked = function (message) {
        return;
    };
    return LogComponent;
}());
LogComponent = __decorate([
    core_1.Component({
        selector: 'lm-log',
        moduleId: module.id,
        templateUrl: 'log.component.html',
        styleUrls: ['log.component.css']
    }),
    __metadata("design:paramtypes", [log_service_1.LogService])
], LogComponent);
exports.LogComponent = LogComponent;
//# sourceMappingURL=log.component.js.map