import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { IonicModule } from '@ionic/angular';
import { ListHeaderComponent } from './list-header/list-header.component';

@NgModule({
  declarations: [ListComponent, ListHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ListComponent, ListHeaderComponent],
})
export class ComponentsModule { }
