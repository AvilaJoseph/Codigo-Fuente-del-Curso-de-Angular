import { Component } from '@angular/core';
import { character } from '../interfaces/character.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    standalone: false,
    templateUrl: 'main-page.component.html'
})

export class MainPage  {

    constructor(private DbzService: DbzService) {}

    get Characters(): character[]{
        return this.DbzService.characters;
    }

    onDeletedCharacter(id: string): void{
        this.DbzService.deletedId(id);
    }

    onNewCharacter(character: character): void{
        this.DbzService.onNewCharacter(character);
    }

}