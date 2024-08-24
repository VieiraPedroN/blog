import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css', 
    './small-card.mobile.component.css',
    './small-card.tablet.component.css']
})
export class SmallCardComponent {

  @Input()
  titleSmallCard: string = ""
  @Input()
  photoSmallCard: string = ""
  @Input()
  dataPost: string = ""
  @Input()
  Id: string = "0"
}
