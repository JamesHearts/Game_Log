import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lm-rating',
    templateUrl: 'app/shared/rating.component.html',
    styleUrls: ['app/shared/rating.component.css']
})

export class RatingComponent {
    @Input() rating: number;
    ratingWidth: number;

    @Output() ratingClicked: EventEmitter<string> =
                    new EventEmitter<string>();

    ngOnChanges(): void {
        this.ratingWidth = this.rating * 86/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`This rating ${this.rating} was clicked!`);
    }
}