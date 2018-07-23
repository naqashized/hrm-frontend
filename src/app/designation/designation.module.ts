import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DesignationRoutes } from './designation.routing';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { AddDesignationComponent } from './form/role.component';
import { EditRoleComponent } from './form/edit.role.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DesignationRoutes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TableFilterComponent,
    AddDesignationComponent,
    EditRoleComponent
  ]
})

export class DesignationModule {}
