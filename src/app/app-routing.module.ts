import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContributeComponent } from './contribute/contribute.component';
import { IntroComponent } from './intro/intro.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
    // children: [
      {
        path: 'about',
        component: AboutComponent,
      }, {
        path: 'contribute',
        component: ContributeComponent,
      },
      {
        path: '',
        component: IntroComponent,
      },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
