import {
  Component, Input
} from '@angular/core';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  @Input('cols') cols = 8;
  @Input('rows') rows = 8;
  @Input('tsize') tsize = 60;
  @Input('tiles') tiles = [
    1, 3, 3, 3, 1, 1, 3, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 2, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 2, 1, 1, 1, 1,
    1, 1, 1, 1, 2, 1, 1, 1,
    1, 1, 1, 1, 2, 1, 1, 1,
    1, 1, 1, 1, 2, 1, 1, 1
  ];
  @Input('tindex') tindex = {
    0: 'empty',
    1: 'soil',
    2: 'bush',
    3: 'tree'
  }

  Math: any;

  constructor() {
    this.Math = Math;
    console.log('Hello MapComponent Component');
  }
}
