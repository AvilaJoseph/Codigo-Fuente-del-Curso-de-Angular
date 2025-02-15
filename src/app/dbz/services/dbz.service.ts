import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

console.log(uuid())

import { character } from '../interfaces/character.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: character[] = [{
      id: uuid(),
      name:'Krillin',
      power:1000
  },
  {
      id: uuid(),
      name:'Goku',
      power: 9500
  },
  {
      id: uuid(),
      name:'Vegeta',
      power: 9200
  }
  ];

    onNewCharacter(character: character): void{
      this.characters.push(character);
  }

    onDeletedCharacter(index:number): void{
      this.characters.splice(index, 1);
    }

    deletedId(id: string): void{
      this.characters = this.characters.filter(character => character.id !== id);
    }

}
