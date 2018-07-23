import { Routes } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { AddRoleComponent } from './form/role.component';
import { EditRoleComponent } from './form/edit.role.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TablePagingComponent } from './table-paging/table-paging.component';
import { TablePinningComponent } from './table-pinning/table-pinning.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';
import { TableSortingComponent } from './table-sorting/table-sorting.component';

export const RoleRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'fullscreen',
      component: DataTableComponent,
      data: {
        heading: 'Fullscreen'
      }
    }, {
      path: 'new',
      component: AddRoleComponent,
      data: {
        heading: 'New Role'
      }
    }, {
      path: 'list',
      component: TableFilterComponent,
      data: {
        heading: 'Roles Listing'
      }
    }, 
    {
      path: 'edit/:id',
      component: EditRoleComponent,
      data: {
        heading: 'Edit Role'
      }
    },
    {
      path: 'paging',
      component: TablePagingComponent,
      data: {
        heading: 'Paging'
      }
    }, {
      path: 'pinning',
      component: TablePinningComponent,
      data: {
        heading: 'Pinning'
      }
    }, {
      path: 'selection',
      component: TableSelectionComponent,
      data: {
        heading: 'Selection'
      }
    }, {
      path: 'sorting',
      component: TableSortingComponent,
      data: {
        heading: 'Sorting'
      }
    }]
  }
];
