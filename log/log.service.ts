import { Injectable } from '@angular/core';
import { IEntry } from './entry';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class LogService {
    private _logUrl = 'api/entries/entries.json';

    constructor(private _http: Http){}

    getEntries(): Observable<IEntry[]> {
        return this._http.get(this._logUrl)
                .map((response: Response) => <IEntry[]> response.json())
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    getEntry(id: number): Observable<IEntry> {
        return this.getEntries()
            .map((entries: IEntry[]) => entries.find(e => e.entryId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}