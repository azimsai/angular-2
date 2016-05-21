import {Component} from 'angular2/core'
import {AuthorService} from './authorService'

@Component({
    selector: 'nv-authors',
    template: `
                    <h2>Authors</h2>
                    <h4>{{title}}</h4>
                    <ul>
                        <li *ngFor="#author of authors">{{author}}</li>                    
                    </ul>                    
              `,
    providers:[AuthorService]
})

export class AuthorComponent{
    title: string = "List of authors";
    authors : string[];

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}