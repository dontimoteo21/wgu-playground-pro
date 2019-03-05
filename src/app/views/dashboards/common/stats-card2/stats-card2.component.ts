import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-stats-card2',
  templateUrl: './stats-card2.component.html',
  styleUrls: ['./stats-card2.component.scss']
})
export class StatsCard2Component {
  classicAdminCards = [
    'Calendar',
    'Microchip',
    'Moon',
    'Paw'
  ]

  constructor() { }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.classicAdminCards, event.previousIndex, event.currentIndex)
  }

}
