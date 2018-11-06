import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Verdura } from '../verduras/verdura';

@Injectable()

export class PeticionesService{
    public url:string;

    constructor(
        private _hhtp:HttpClient
    ){
        this.url="https://jsonplaceholder.typicode.com/posts"; //localhost:8080/topic jsonplaceholder.typicode.com/posts
    }

getPrueba(){
    return "Hola, soy un servicio";
}

getPosts():Observable<any>{
    return this._hhtp.get(this.url);

}

setVerdura(verdura:Verdura):Observable<any>{
    let json =JSON.stringify(verdura); //transformar objeto a objeto json
    //la comunicacion se hace siempre a traves de json
    let params= 'json= ' +json;
    let headers= new HttpHeaders().set('Content-type','application/json');

    return this._hhtp.post(this.url, params,{headers:headers});
}

}