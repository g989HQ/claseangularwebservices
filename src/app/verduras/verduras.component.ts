import { Component, OnInit } from '@angular/core';
import{Verdura} from '../verduras/verdura';
import{PeticionesService} from '../services/peticiones.service';

//import{Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.css'],
  providers: [PeticionesService],
})
export class VerdurasComponent implements OnInit {

   public formNombre:string;
   public formPrecio:string;
   public formDescripcion:string;
   public formGuardar:string;
   public verdura:Verdura;
  constructor( private _peticionesService:PeticionesService,
  //  private _route:ActivatedRoute,
    //private _router:Router
    ) { 
  this.formNombre='Nombre de la verdura';  
  this.formPrecio='Indique el precio';
  this.formDescripcion="Describa la verdura";
  this.formGuardar="Guardar verdura";
  this.verdura= new Verdura('',0,'');
}
  ngOnInit() {
    console.log(this.verdura);
  }
  /*
  redirigir(){
    this._router.navigate(["profesor", "asdsad"]);
  }
  */
guardarFrom(){
  this._peticionesService.setVerdura(this.verdura).subscribe();
/*
  this._peticionesService.getPosts().subscribe(
    res=>{
      console.log (res);
      this._router.navigate(["profesor", "asdsad"]);
      
    },
    error=>{
       console.log(<any>error);
    }
);
}
*/
}
}