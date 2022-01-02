import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatProgressSpinnerModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  exports: [MatExpansionModule, MatProgressSpinnerModule]
})
export class AppMaterialModule { }
