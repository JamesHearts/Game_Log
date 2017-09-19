import { Component, OnInit } from '@angular/core';
import { IEntry } from './entry';
import { LogService } from './log.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'lm-log',
    moduleId: module.id,
    templateUrl: 'log.component.html',
    styleUrls: ['log.component.css']
})

export class LogComponent implements OnInit{
    pageTitle: string = 'Video Game Log';
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    entries: IEntry[];
    errorMessage: string;

    constructor(private _logService: LogService, ){

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._logService.getEntries()
            .subscribe(
                entries => this.entries = entries,
                error => this.errorMessage = <any>error
            );
    }

    onRatingClicked(message: string): void {
        return;
    }

 }