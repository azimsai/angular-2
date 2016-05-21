import {Component,Input} from 'angular2/core';
import Input from "postcss/d.ts/input";

@Component({
    selector: 'nv-like',
    template: `
        <h1>Like Component</h1>
                <div>
                    
                    <i class="glyphicon"
                       (click)="onClick()"
                       [class.glyphicon-heart] = "isLiked"
                       [class.glyphicon-heart-empty] ="!isLiked"
                       >                       
                    </i>
                    <span>{{likeCount}}</span>
                </div>
    
    `,
    styles: [`
    .glyphicon{
      font-size: 30px;
    }    
   .glyphicon-heart-empty{
        color :#ccc;
    }
    .glyphicon-heart{
        color:deeppink;
    }
    
    `]

})

export class LikeComponent{
    @Input('is-liked') isLiked = false;
    @Input('like-count') likeCount =0;

    onClick(){
        this.isLiked = !this.isLiked;
        if(this.isLiked){
            this.likeCount ++;
        }else {
            this.likeCount --;
        }
    }


}