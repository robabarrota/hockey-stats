import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    CommonModule
  ],
  exports: [MatExpansionModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatRippleModule]
})
export class AppMaterialModule { }
