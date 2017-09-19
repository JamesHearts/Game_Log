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
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var log_service_1 = require("./log.service");
//Selector property is only needed if the component is nested into another component.
var EntryDetailsComponent = (function () {
    function EntryDetailsComponent(_route, _router, _logService) {
        this._route = _route;
        this._router = _router;
        this._logService = _logService;
        this.pageTitle = 'Game Details';
    }
    EntryDetailsComponent.prototype.onBack = function () {
        this._router.navigate(['/log']);
    };
    EntryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getEntry(id);
        });
    };
    EntryDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EntryDetailsComponent.prototype.getEntry = function (id) {
        var _this = this;
        this._logService.getEntry(id).subscribe(function (entry) { return _this.entry = entry; }, function (error) { return _this.errorMessage = error; });
    };
    EntryDetailsComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Game Detail: ' + message;
    };
    return EntryDetailsComponent;
}());
EntryDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/log/entry-details.component.html',
        styleUrls: ['app/log/entry-details.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.Router,
        log_service_1.LogService])
], EntryDetailsComponent);
exports.EntryDetailsComponent = EntryDetailsComponent;
//# sourceMappingURL=entry-details.component.js.map