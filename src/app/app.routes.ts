import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';
import { Products } from './pages/public/products/products';
import { Contact } from './pages/public/contact/contact';
import { Dashboard } from './pages/private/dashboard/dashboard';
import { Register } from './pages/public/register/register';
import { Login } from './pages/public/login/login';
import { Cart } from './pages/public/cart/cart';

export const routes: Routes = [
    { path: '', component: Home } ,
    { path: 'products' , component: Products },
    { path: 'contact' , component: Contact },
    {path: 'register', component: Register},
    {path: 'login', component: Login},
    {path: 'cart', component: Cart},


    { path: 'dashboard' , component: Dashboard }

];
