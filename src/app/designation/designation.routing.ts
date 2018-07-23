import { Routes } from '@angular/router';

import { AddDesignationComponent } from './form/role.component';
import { EditRoleComponent } from './form/edit.role.component';
import { TableFilterComponent } from './table-filter/table-filter.component';

export const DesignationRoutes: Routes = [
  {
    path: '',
    children: [ {
      path: 'new',
      component: AddDesignationComponent,
      data: {
        heading: 'New Designation'
      }
    }, {
      path: 'list',
      component: TableFilterComponent,
      data: {
        heading: 'Designations Listing'
      }
    }, 
    {
      path: 'edit/:id',
      component: EditRoleComponent,
      data: {
        heading: 'Edit Designation'
      }
    }]
  }
];
