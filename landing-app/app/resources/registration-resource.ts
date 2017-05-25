import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class RegistrationResource {
    private registrationUrl: string = 'http://10.0.2.2:3000/registration';

    constructor(private http: Http) {
    }

    registration(data: any): Observable<any> {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        });

        return this.http.post(
            this.registrationUrl, JSON.stringify(data), {headers: headers}
        ).map((response) => {
            return response.json() || {};
        });
    }

}
