"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var log_component_1 = require("./log/log.component");
var entry_filter_pipe_1 = require("./log/entry-filter.pipe");
var rating_component_1 = require("./shared/rating.component");
var home_component_1 = require("./home/home.component");
var entry_details_component_1 = require("./log/entry-details.component");
var page_not_found_component_1 = require("./page-not-found.component");
var entry_guard_service_1 = require("./log/entry-guard.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'log', component: log_component_1.LogComponent },
                { path: 'log/entry/:id',
                    canActivate: [entry_guard_service_1.EntryDetailGuard],
                    component: entry_details_component_1.EntryDetailsComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
            ])],
        declarations: [app_component_1.AppComponent, log_component_1.LogComponent, entry_filter_pipe_1.EntryFilterPipe, rating_component_1.RatingComponent, home_component_1.HomeComponent, entry_details_component_1.EntryDetailsComponent, page_not_found_component_1.PageNotFoundComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [entry_guard_service_1.EntryDetailGuard]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map