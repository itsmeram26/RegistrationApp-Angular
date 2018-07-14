import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UserinformationComponent } from "src/app/userinformation/userinformation.component";


@Injectable()
export class HTTPService {
    constructor(private httpClient: HttpClient) { }
    
    createRegistration(data : any[]) {
        return this.httpClient.post('http://localhost:8888/camper', JSON.stringify(data));
    }
}