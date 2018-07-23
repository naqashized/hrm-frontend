import { Routes } from '@angular/router';

import { AddEmployeeComponent } from './form/employee.component';
import { EditEmployeeComponent } from './form/edit.employee.component';
import { TableFilterComponent } from './table-filter/table-filter.component';

export const EmployeeRoutes: Routes = [
  {
    path: '',
    children: [ {
      path: 'new',
      component: AddEmployeeComponent,
      data: {
        heading: 'New Employee'
      }
    }, {
      path: 'list',
      component: TableFilterComponent,
      data: {
        heading: 'Employees Listing'
      }
    }, 
    {
      path: 'edit/:id',
      component: EditEmployeeComponent,
      data: {
        heading: 'Edit Employee'
      }
    }]
  }
];
