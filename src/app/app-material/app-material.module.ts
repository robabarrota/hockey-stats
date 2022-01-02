import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    CommonModule
  ],
  exports: [MatExpansionModule]
})
export class AppMaterialModule { }
