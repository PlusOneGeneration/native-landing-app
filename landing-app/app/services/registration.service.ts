import {Injectable} from '@angular/core';
import {RegistrationResource} from "../resources/registration-resource";

@Injectable()
export class RegistrationService {

    constructor(private registrationResource: RegistrationResource) {
    }

    registration(data: any) {
        return this.registrationResource.registration(data);
    }
}