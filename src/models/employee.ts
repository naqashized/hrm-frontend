import { Designation }    from './designation';
export class Employee {

    constructor(
      public id: string,
      public firstName: string,
      public secondName: string,
      public phone: string,
      public designationId: string
    ) {  }
  
  }