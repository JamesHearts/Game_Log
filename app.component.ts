import { Component } from '@angular/core';
import { LogService } from './log/log.service';

@Component({
    selector: 'lm-app',
    template: `
    <div>
        <nav class = 'navbar-default'>
            <div class = 'container-fluid'>
                <a class = 'navbar-brand'>{{pageTitle}}</a>
                <ul class = 'nav navbar-nav'>
                    <li><a [routerLink] = "['/home']">Home</a></li>
                    <li><a [routerLink] = "['/log']">Log</a></li>
                </ul>
            </div>
        </nav>
        <div class = 'container'>
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    providers: [ LogService ]
})

export class AppComponent {
    pageTitle: string = `Video Game Log`;
};