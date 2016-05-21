import {Component} from 'angular2/core';
import{NvComponentComponent} from './nv-component.component'
import {CoursesComponent} from "./courses.component";
import {AuthorComponent} from "./author.component";
import {FavouriteComponent} from "./favourite.component";
import {LikeComponent} from "./like.component"
import {VoteComponent} from "./vote.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 App</h1> 
        <ng-vote></ng-vote>
        <nv-like [is-liked]="post.isFavourite" [like-count] = "post.likeCount"></nv-like>
        <nv-courses></nv-courses>
        <nv-authors></nv-authors> 
        <nv-favourite [is-favourite]="post.isFavourite" (change) = "onFavouriteChange($event)"></nv-favourite>
    `,
    directives: [NvComponentComponent,CoursesComponent,AuthorComponent,FavouriteComponent,LikeComponent,VoteComponent]
})
export class AppComponent {

    post = {
        title: "Post one",
        isFavourite : true,
        likeCount: 10
    }

    onFavouriteChange($event){
        console.log($event);
    }

}