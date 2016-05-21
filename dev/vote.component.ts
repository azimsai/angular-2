import {Component,Input,Output} from 'angular2/core'

@Component({
    selector: 'ng-vote',
    template: `
                <h1>Vote Component</h1>
                <div class="voteDiv">
                    <i class="glyphicon glyphicon-chevron-up"
                       (click)="onClick()"                      
                       >
                       
                    </i>
                    <span class="num">{{voteCount}}</span>
                     <i class="glyphicon glyphicon-chevron-down"
                       (click)="onClick()"                     
                       >
                       
                    </i>
                </div>   
              `,
    styles:[`              
                .voteDiv{
                    width: 20px;
                    text-align: center;
                }
                .glyphicon{
                    font-size: 30px;
                    color: #ccc;
                }
                .num{
                    font-size: 25px;
                    text-align: center;
                }
                
            `]
})


export class VoteComponent{
    @Input() voteCount = 0;

    onClick(){
        
    }

}