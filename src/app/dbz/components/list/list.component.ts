import { Component, Input } from '@angular/core';
import { character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  @Input()
  public characterList: character[] = [{
    name:'Trunks',
    power:10
  }]

  onDeletedCharacter(index:number): void{
    console.log({index});
  }
}
