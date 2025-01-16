import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Iroman','She-Hulk','Thor','Hulk']

  public deletedHereo?: string = ''

  removeLastHero():void{
    this.deletedHereo = this.heroNames.pop();

  }

}
