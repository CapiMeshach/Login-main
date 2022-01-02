export interface User {
  id: number;
  authToken: string;
  verified: boolean;
  firstName: string;
  lastName: string;
  mobileNo: string;
  email: string;
  companyId: null;
  passwordChanged: boolean;
  userType: {
    id: number;
    userType: string;
  };
  role?: string;
  routes?: Array<string>;
}
