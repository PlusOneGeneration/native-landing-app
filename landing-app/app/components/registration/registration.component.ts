import {Component} from "@angular/core";
import {Router} from "@angular/router";
import dialogs = require("ui/dialogs");

import {RegistrationService} from "../../services/registration.service";
import {Request} from '../../models/Request';

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "registration.component.html",
})
export class RegistrationComponent {
    request: Request = new Request();
    errors: string;

    constructor(private registrationService: RegistrationService,
                private router: Router) {
    }

    registration() {
        this.registrationService.registration(this.request)
            .subscribe((result) => {
                this.router.navigate(['finish']);
            }, (err) => {
                this.errors = err._body;
                dialogs.alert(this.errors).then(function () {
                    console.log("Dialog closed!");
                    console.dir(err);
                });
            });
    }
}
