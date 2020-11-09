import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

      properties: Array<any> = [
        {
        id: 1,
        Name: 'Olusegun Obasanjo House',
        Type: 'House',
        Price: 12000
    },
    {
        id: 2,
        Name: 'Umar Musa Yar Adua House',
        Type: 'House',
        Price: 15000
    },
        {
        id: 3,
        Name: 'Goodluck Ebele Jonathan House',
        Type: 'House',
        Price: 17000
    },
        {
        id: 4,
        Name: 'Muhammadu Buhari House',
        Type: 'House',
        Price: 19000
    },
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
