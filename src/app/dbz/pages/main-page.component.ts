import { Component } from '@angular/core';
import { character } from '../interfaces/character.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    standalone: false,
    templateUrl: 'main-page.component.html'
})

export class MainPage  {

    constructor(public DbzService: DbzService) { 

    }

}