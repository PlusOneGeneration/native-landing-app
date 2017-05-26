import {Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {StartComponent} from "./components/start/start.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {FinishComponent} from "./components/finish/finish.component";

const routes: Routes = [
    {path: "", redirectTo: "/start", pathMatch: "full"},
    {path: "start", component: StartComponent},
    {path: "registration", component: RegistrationComponent},
    {path: "finish", component: FinishComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}