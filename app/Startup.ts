/**
 * Created by grahul on 1/5/2017.
 */
import  { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import {movieModule} from "./movieModule";


const platform = platformBrowserDynamic();
platform.bootstrapModule(movieModule)

