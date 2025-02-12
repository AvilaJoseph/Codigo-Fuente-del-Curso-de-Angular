import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  public onDeletedID: EventEmitter<number> = new EventEmitter();

  onDeletedCharacter(index:number): void{
    this.onDeletedID.emit(index);
  }
}
