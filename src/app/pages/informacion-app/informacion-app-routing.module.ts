import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionAppPage } from './informacion-app.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionAppPageRoutingModule {}
