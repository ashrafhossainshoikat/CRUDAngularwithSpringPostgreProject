import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {MessagesComponent} from './messages/messages.component';
import {ParentEmployeeComponent} from './parent-employee/parent-employee.component';


const routes: Routes = [
  {path: '', component: HeroesComponent},
  { path: 'heroes', component: HeroesComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'parent', component: ParentEmployeeComponent }

];

// const ROUTES: Routes = [
//   {
//     path: '',
//     component: InventoryComponent,
//     children: [
//       {path: 'setup', loadChildren: './setup/setup.module#SetupModule'},
//     ]
//   },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
