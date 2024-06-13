import { Routes } from '@angular/router';
import {TypeComponent} from './type/type.component';
import {HomeComponent} from './home/home.component';


export const routes: Routes = [
    { path: 'type-component/:type', component: TypeComponent },
    { path: '', component: HomeComponent },
];
