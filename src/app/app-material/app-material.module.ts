import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatProgressSpinnerModule, MatTableModule, MatSortModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    CommonModule
  ],
  exports: [MatExpansionModule, MatProgressSpinnerModule, MatTableModule, MatSortModule]
})
export class AppMaterialModule { }
