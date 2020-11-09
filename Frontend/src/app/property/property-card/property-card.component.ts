import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-property-card',
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent {
    @Input() property: any;
}
