import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";
import {StartComponent} from "./components/start/start.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {RegistrationService} from "./services/registration.service";
import {RegistrationResource} from "./resources/registration-resource";
import {FinishComponent} from "./components/finish/finish.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        StartComponent,
        RegistrationComponent,
        FinishComponent
    ],
    providers: [
        RegistrationResource,
        RegistrationService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
