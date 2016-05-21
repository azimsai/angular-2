import {Component,Input,Output,EventEmitter} from  'angular2/core'


@Component({
    selector: 'nv-favourite',
    template:`
                <h1>Favourite Component</h1>
                <div>
                    <i class="glyphicon"
                       (click)="onClick()"
                       [class.glyphicon-star] = "isFavourite"
                       [class.glyphicon-star-empty] ="!isFavourite"
                       >
                       
                    </i>
                </div>
             `

})

export class FavouriteComponent{

    @Input('is-favourite') isFavourite = false;
    @Output() change = new EventEmitter();
    onClick(){
        this.isFavourite = !this.isFavourite;
        this.change.emit({newValue: this.isFavourite});
    }

}