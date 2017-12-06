import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, GridRoutingModule, PageHeaderModule,ReactiveFormsModule,FormsModule, PageHeaderModule],
    declarations: [GridComponent]
})
export class GridModule {}
