import {Component} from '@angular/core';
import{Profesor} from './profesor';
import{PeticionesService} from "../app/services/peticiones.service";
//import{Router,ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-profesor',
    templateUrl: './profesor.component.html',
    providers:[PeticionesService]

 } )
export class ProfesorComponent{
    public nombre:string; 
    public edad:number;
    public casado:boolean;
    public trabajos:Array<any>=['Profesor','Director','Barrendero'];
    public profesor:Profesor;
    public profesorado:Array<Profesor>;
    public color:String;
    public admin:boolean;
    public api_posts;
    public parametro;

    constructor(
    private _peticionesService:PeticionesService,
  //  private _route:ActivatedRoute,
    //private _router:Router
    ){
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

    ngOnInit(): void {
       // console.log(this.profesor);
     this._peticionesService.getPosts().subscribe(
         res=>{
            this.api_posts=res;
            if (!this.api_posts) 
            console.log ("Respuesta vacia de la api");


         },
         error=>{
            console.log(<any>error);
         }
     );
     /*
     this._route.params.forEach({params: Params)=>{
     this.parametro=params("nombre");

    })
}


}

*/
    }
}