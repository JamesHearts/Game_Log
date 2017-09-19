import { Component } from '@angular/core';

@Component({
    template: `
    <div>
        <br>
        <br>
        <h2>{{pageTitle}}</h2>
    </div>
    `
})

export class PageNotFoundComponent {
    pageTitle: string = `Error 404: Page Not Found.`;
};