import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { LogComponent }  from './log/log.component';
import { EntryFilterPipe } from './log/entry-filter.pipe';
import { RatingComponent } from './shared/rating.component';
import { HomeComponent } from './home/home.component';
import { EntryDetailsComponent } from './log/entry-details.component';
import { PageNotFoundComponent } from './page-not-found.component'; 
import { EntryDetailGuard } from './log/entry-guard.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, 
  RouterModule.forRoot( [
    {path: 'log', component: LogComponent },
    {path: 'log/entry/:id',
      canActivate: [ EntryDetailGuard ], 
      component: EntryDetailsComponent },
    {path: 'home', component: HomeComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', component: PageNotFoundComponent },
  ]) ],
  declarations: [ AppComponent, LogComponent, EntryFilterPipe, RatingComponent, HomeComponent, EntryDetailsComponent, PageNotFoundComponent ],
  bootstrap: [ AppComponent ],
  providers: [ EntryDetailGuard]
})
export class AppModule {}
