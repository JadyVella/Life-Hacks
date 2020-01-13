import { Component, OnInit } from '@angular/core';
import { LifeHacks } from '../life-hacks'

@Component({
  selector: 'app-life-hacks',
  templateUrl: './life-hacks.component.html',
  styleUrls: ['./life-hacks.component.css']
})
export class LifeHacksComponent implements OnInit {


  lifehacks: LifeHacks[] = [
    new LifeHacks(1, "if you want to walk fast, walk alone. If you want to walk far walk together", "Jady", "Felix"),
    new LifeHacks(2, "Give without remembering and receive without forgeting", "Jady", "Felix"),
    new LifeHacks(3, "The best things in life are free", "Jady", "Felix"),
    new LifeHacks(4, "The best is yet to come", "Jady", "Felix"),
    new LifeHacks(5, "Hard doesn't mean impossible", "Jady", "Felix"),

  ];

  showDetails(index){
    this.lifehacks[index].showAuthor = !this.lifehacks[index].showAuthor
  }

  deleteGoal(toDelete, index){
    if (toDelete){
      this.lifehacks.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
