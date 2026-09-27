declare global {
  namespace Express {
    interface User extends User_interface{}
  }
}

export interface User_interface {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
}

