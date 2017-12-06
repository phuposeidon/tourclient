import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {  FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
    imports: [CommonModule,FileUploadModule, FormRoutingModule,ReactiveFormsModule,FormsModule, PageHeaderModule],
    declarations: [FormComponent ]
})
export class FormModule {}
