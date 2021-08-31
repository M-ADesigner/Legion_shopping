import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionAppPageRoutingModule } from './informacion-app-routing.module';

import { InformacionAppPage } from './informacion-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionAppPageRoutingModule
  ],
  declarations: [InformacionAppPage]
})
export class InformacionAppPageModule {}
