import {Component} from '@angular/core';
import{Profesor} from './profesor';

@Component({
    selector: 'app-profesor',
    templateUrl: './profesor.component.html'

 } )
export class ProfesorComponent{
    public nombre:string; 
    public edad:number;
    public casado:boolean;
    public trabajos:Array<any>=['Profesor','Director','Barrendero'];
    public profesor:Profesor;
    public profesorado:Array<Profesor>;
    public color:String;

    constructor(){
        this.nombre='Javi';
        this.edad=32;
        this.casado= false;
        this.profesor=new Profesor('Lucas',38,'biologia',false);
        
        this.profesorado=[
            this.profesor,
            new Profesor('Pedro',35,'geografia',false),
            new Profesor('Juan',25,'historia',true),
            new Profesor('Pablo',31,'matematica',false)
        ];
        this.color='green';
    }
}


