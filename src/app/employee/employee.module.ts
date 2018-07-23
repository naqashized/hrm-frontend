import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { EmployeeRoutes } from './employee.routing';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { AddEmployeeComponent } from './form/employee.component';
import { EditEmployeeComponent } from './form/edit.employee.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRoutes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TableFilterComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ]
})

export class EmployeeModule {}
