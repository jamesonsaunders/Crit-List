import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ListComponent],
})
export class ComponentsModule { }
