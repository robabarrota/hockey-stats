import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatProgressSpinnerModule, MatTableModule, 
  MatSortModule, MatFormFieldModule, MatInputModule, MatRippleModule, 
  MatProgressBarModule } from '@angular/material';


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
    MatProgressBarModule,
    CommonModule
  ],
  exports: [MatExpansionModule, MatProgressSpinnerModule, 
    MatTableModule, MatSortModule, MatFormFieldModule, 
    MatInputModule, MatRippleModule, MatProgressBarModule]
})
export class AppMaterialModule { }
