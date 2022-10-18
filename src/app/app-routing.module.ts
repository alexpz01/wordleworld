import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {PublicModule} from './public/public.module'

const routes : Routes = [
    {path : '', 
    loadChildren : () => import("./public/public.module").then(m => m.PublicModule)}
]


@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRouterModule {

}