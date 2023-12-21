import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/mycomponent', pathMatch: 'full'
  },
  {
    path: 'mycomponent', component: MyComponentComponent
  },

  {
    path: 'mycomponent2', component: MyComponent2Component
  },

  {
    path: 'new',
    loadChildren: () => import("./new/testmodule/testmodule.module").then((m) => m.TestmoduleModule),
  },

  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
