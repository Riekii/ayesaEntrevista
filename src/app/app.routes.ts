import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-list/user-detail/user-detail.component';
import { UserModComponent } from './components/user-list/user-mod/user-mod.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'user-list',
        pathMatch: 'full'
    },
    {
        path: 'user-list',
        component: UserListComponent
    },
    {
        path: 'user-det/:id',
        component: UserDetailComponent
    },
    {
        path: 'user-mod/:id',
        component: UserModComponent
    },
];