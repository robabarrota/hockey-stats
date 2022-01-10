import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatProgressSpinnerModule, MatTableModule, 
  MatSortModule, MatFormFieldModule, MatInputModule, MatRippleModule, 
  MatProgressBarModule, MatIconModule } from '@angular/material';


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
    MatIconModule,
    CommonModule
  ],
  exports: [MatExpansionModule, MatProgressSpinnerModule, 
    MatTableModule, MatSortModule, MatFormFieldModule, 
    MatInputModule, MatRippleModule, MatProgressBarModule, 
    MatIconModule]
})
export class AppMaterialModule { }
