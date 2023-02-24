import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './shared-button/shared-button.component';
import { AppFormComponent } from './app-form/app-form.component';
import { BoardItemComponent } from './board-item/board-item.component';



@NgModule({
  declarations: [
    SharedButtonComponent,
    AppFormComponent,
    BoardItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
