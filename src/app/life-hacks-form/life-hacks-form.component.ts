import { Component, OnInit } from '@angular/core';
import { LifeHacks } from '../life-hacks'

@Component({
  selector: 'app-life-hacks-form',
  templateUrl: './life-hacks-form.component.html',
  styleUrls: ['./life-hacks-form.component.css']
})
export class LifeHacksFormComponent implements OnInit {

  newLifeHacks = new LifeHacks(0,"","","");
  constructor() { }

  ngOnInit() {
  }

}
