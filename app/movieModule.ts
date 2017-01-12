import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {myShopComponent} from "./myShopComponent";
/**
 * Created by grahul on 1/12/2017.
 */
@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[myShopComponent],
    bootstrap:[myShopComponent]
})
export  class movieModule{

}
