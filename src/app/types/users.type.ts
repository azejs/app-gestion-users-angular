// users.type.ts
export interface User {
    id: number;
    avatar: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
  }
  
  export interface UserWithActions extends User {
    actions: string[];
  }
  