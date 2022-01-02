import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  exports: [MatExpansionModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule]
})
export class AppMaterialModule { }
