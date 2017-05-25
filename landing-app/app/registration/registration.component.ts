import {Component} from "@angular/core";
import {RegistrationService} from "../services/registration.service";
import {Request} from '../models/Request';

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "registration.component.html",
})
export class RegistrationComponent {
    request: Request;

    constructor(private registrationService: RegistrationService) {
    }

    registration() {
        this.registrationService.registration({first: 'Ira'}).subscribe((result) => {
            console.dir(result);
        }, (err) => {
            console.log('err', err);
            console.dir(err);
        });
    }
}
