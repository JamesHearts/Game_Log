import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/subscription';
import { LogService } from './log.service';
import { IEntry } from './entry';

//Selector property is only needed if the component is nested into another component.
@Component({
    templateUrl: 'app/log/entry-details.component.html',
    styleUrls: ['app/log/entry-details.css']
})

export class EntryDetailsComponent {
    pageTitle: string = 'Game Details';
    entry: IEntry;
    errorMessage: string;
    private sub: Subscription;

  constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _logService: LogService) {
    }

    onBack(): void {
        this._router.navigate(['/log']);
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getEntry(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getEntry(id: number) {
        this._logService.getEntry(id).subscribe(
            entry => this.entry = entry,
            error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Game Detail: ' + message;
    }

}