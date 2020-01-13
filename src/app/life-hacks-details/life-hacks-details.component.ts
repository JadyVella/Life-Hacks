import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LifeHacks } from "../life-hacks"

@Component({
  selector: 'app-life-hacks-details',
  templateUrl: './life-hacks-details.component.html',
  styleUrls: ['./life-hacks-details.component.css']
})
export class LifeHacksDetailsComponent implements OnInit {
  clickCounter: number = 0;
  dislikeCounter: number = 0;

  @Input() lifehacks: LifeHacks;
  @Output() toDelete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.toDelete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }
  countClick() {
    this.clickCounter += 1;
  }
  countDislike() {
    this.dislikeCounter += 1;
  }

}
