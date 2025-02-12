import { Component } from '@angular/core';
import { character } from '../interfaces/character.interfaces';

@Component({
    selector: 'app-dbz-main-page',
    standalone: false,
    templateUrl: 'main-page.component.html'
})

export class MainPage  {
    public characters: character[] = [{
        name:'Krillin',
        power:1000
    },
    {
        name:'Goku',
        power: 9500
    },
    {
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

}