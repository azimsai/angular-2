import {Component} from 'angular2/core';

@Component({
    selector: 'nv-component',
    template: `
        Hi i am <span [style.color] =" inputElement.value == 'yes' ? 'red' : ''" > {{name}}</span> and this is my first Angular2 App ! 
        <span [class.is-awesome]=" inputElement.value === 'yes'">I think it is awesome!!!</span>
        <br>
        <br>
        Is it awesome?
        <input type="text" #inputElement (keyup)="0">
        <br>
        <br>
        <button [disabled]="inputElement.value !== 'yes'" >Only enabled if yes</button>
        
    `,
    styleUrls: ['src/css/nvcomponent.css']
})

export class NvComponentComponent{
    name = 'Azeem'
}
