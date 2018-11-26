import { Component, Input } from '@angular/core';

@Component({
  selector: 'charactor',
  templateUrl: 'charactor.html',
  host: {
    '(document:mouseup)': 'move($event)'
  }
})
export class CharactorComponent {

  @Input('cols') cols = 8;
  @Input('rows') rows = 8;
  @Input('tsize') tsize = 80;

  rect_tile_pos = [1,1];

  rect_obj = {
    pageX: 0,
    pageY: 0
  }

  point_obj = {
    pageX: 0,
    pageY: 0
  }

  line_obj = {
    length: 0,
    deg: 0
  }

  constructor() {
  }
  ngOnChanges() {
    this.rect_obj = {
      pageX: this.rect_tile_pos[0]*this.tsize,
      pageY: this.rect_tile_pos[1]*this.tsize
    }
  }
  move(ev) {
    this.point_obj.pageX = ev.pageX;
    this.point_obj.pageY = ev.pageY;
    this.line_obj.length = 
    Math.sqrt(Math.pow(this.point_obj.pageX - this.rect_obj.pageX, 2)
    + Math.pow(this.point_obj.pageY - this.rect_obj.pageY, 2));
    let deg = (Math.asin((this.point_obj.pageY - this.rect_obj.pageY)/this.line_obj.length))*(180/Math.PI);
    if(this.point_obj.pageX - this.rect_obj.pageX > 0) {
      this.line_obj.deg = deg;
    } else {
      this.line_obj.deg = 180 - deg;
    }
    //asin은 sin을 이용해서 각도를 구하는 함수
    //asin 180 == pie
  }
}