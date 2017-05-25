import {Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {StartComponent} from "./start/start.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
    {path: "", redirectTo: "/start", pathMatch: "full"},
    {path: "start", component: StartComponent},
    {path: "registration", component: RegistrationComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}