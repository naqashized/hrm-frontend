import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'Dashboard',
    type: 'link',
    icon: 'basic-accelerator'
  },
  // {
  //   state: 'email',
  //   name: 'EMAIL',
  //   type: 'link',
  //   icon: 'basic-paperplane'
  // },
  // {
  //   state: 'components',
  //   name: 'COMPONENTS',
  //   type: 'sub',
  //   icon: 'basic-webpage-multiple',
  //   badge: [
  //     {
  //       type: 'success',
  //       value: '5'
  //     }
  //   ],
  //   children: [
  //     {
  //       state: 'accordion',
  //       name: 'ACCORDION'
  //     },
  //     {
  //       state: 'alert',
  //       name: 'ALERT'
  //     },
  //     {
  //       state: 'buttons',
  //       name: 'BUTTONS'
  //     },
  //     {
  //       state: 'buttonicons',
  //       name: 'SBUTTONS'
  //     },
  //     {
  //       state: 'carousel',
  //       name: 'CAROUSEL'
  //     },
  //     {
  //       state: 'collapse',
  //       name: 'COLLAPSE'
  //     },
  //     {
  //       state: 'datepicker',
  //       name: 'DATEPICKER'
  //     },
  //     {
  //       state: 'dropdown',
  //       name: 'DROPDOWN'
  //     },
  //     {
  //       state: 'modal',
  //       name: 'MODAL'
  //     },
  //     {
  //       state: 'pagination',
  //       name: 'PAGINATION'
  //     },
  //     {
  //       state: 'popover',
  //       name: 'POPOVER'
  //     },
  //     {
  //       state: 'progress',
  //       name: 'PROGRESS'
  //     },
  //     {
  //       state: 'rating',
  //       name: 'RATING'
  //     },
  //     {
  //       state: 'tabs',
  //       name: 'TABS'
  //     },
  //     {
  //       state: 'timepicker',
  //       name: 'TIMEPICKER'
  //     },
  //     {
  //       state: 'tooltip',
  //       name: 'TOOLTIP'
  //     },
  //     {
  //       state: 'typeahead',
  //       name: 'TYPEAHEAD'
  //     },
  //     {
  //       state: 'spinners',
  //       name: 'SPINNERS'
  //     }
  //   ]
  // },
  // {
  //   state: 'icons',
  //   name: 'ICONS',
  //   type: 'sub',
  //   icon: 'basic-postcard',
  //   children: [
  //     {
  //       state: 'linea',
  //       name: 'LINEA'
  //     },
  //     {
  //       state: 'fontawesome',
  //       name: 'FONTAWESOME'
  //     },
  //     {
  //       state: 'sli',
  //       name: 'SLI'
  //     }
  //   ]
  // },
  // {
  //   state: 'taskboard',
  //   name: 'TASKBOARD',
  //   type: 'link',
  //   icon: 'basic-message-txt'
  // },
  // {
  //   state: 'cards',
  //   name: 'CARDS',
  //   type: 'sub',
  //   icon: 'basic-postcard',
  //   children: [
  //     {
  //       state: 'basic',
  //       name: 'BASIC'
  //     },
  //     {
  //       state: 'portlets',
  //       name: 'PORTLETS'
  //     },
  //     {
  //       state: 'draggable',
  //       name: 'DRAGGABLE'
  //     }
  //   ]
  // },
  // {
  //   state: 'forms',
  //   name: 'FORMS',
  //   type: 'sub',
  //   icon: 'basic-sheet-pen',
  //   children: [
  //     {
  //       state: 'basic',
  //       name: 'BASIC'
  //     },
  //     {
  //       state: 'masks',
  //       name: 'MASKS'
  //     },
  //     {
  //       state: 'editor',
  //       name: 'EDITOR'
  //     },
  //     {
  //       state: 'validation',
  //       name: 'VALIDATION'
  //     },
  //     {
  //       state: 'upload',
  //       name: 'UPLOAD'
  //     },
  //     {
  //       state: 'tree',
  //       name: 'TREE'
  //     },
  //   ]
  // },
  // {
  //   state: 'tables',
  //   name: 'TABLES',
  //   type: 'sub',
  //   icon: 'basic-webpage-txt',
  //   badge: [
  //     {
  //       type: 'primary',
  //       value: '2'
  //     }
  //   ],
  //   children: [
  //     {
  //       state: 'basic',
  //       name: 'BASIC'
  //     },
  //     {
  //       state: 'responsive',
  //       name: 'RESPONSIVE'
  //     },
  //   ]
  // },
  {
    state: 'user',
    name: 'User',
    type: 'sub',
    icon: 'basic-webpage-img-txt',
    children: [
      // {
      //   state: 'fullscreen',
      //   name: 'FULLSCREEN'
      // },
      // {
      //   state: 'editing',
      //   name: 'EDITING'
      // },
      {
        state: 'filter',
        name: 'Users Listing'
      },
      // {
      //   state: 'paging',
      //   name: 'PAGING'
      // },
      // {
      //   state: 'pinning',
      //   name: 'PINNING'
      // },
      // {
      //   state: 'selection',
      //   name: 'SELECTION'
      // },
      // {
      //   state: 'sorting',
      //   name: 'SORTING'
      // },
    ]
  },
  {
    state: 'role',
    name: 'Role',
    type: 'sub',
    icon: 'basic-webpage-img-txt',
    children: [

      {
        state: 'list',
        name: 'Roles Listing'
      },
      {
        state: 'new',
        name: 'New Role'
      }
    ]
  },
  {
    state: 'designation',
    name: 'Designation',
    type: 'sub',
    icon: 'basic-webpage-img-txt',
    children: [

      {
        state: 'list',
        name: 'Designations Listing'
      },
      {
        state: 'new',
        name: 'New Designation'
      }
    ]
  },
  {
    state: 'employee',
    name: 'Employee',
    type: 'sub',
    icon: 'basic-webpage-img-txt',
    children: [

      {
        state: 'list',
        name: 'Employees Listing'
      },
      {
        state: 'new',
        name: 'New Employee'
      }
    ]
  },
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
