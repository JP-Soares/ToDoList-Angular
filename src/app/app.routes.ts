import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Landingpage } from './landingpage/landingpage';

export const routes: Routes = [
    {
        path:'',
        component: Landingpage
    },
    {
        path: 'home',
        component: Home
    }
];
