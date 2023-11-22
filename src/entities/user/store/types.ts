export type User = {
   email: string;
   name: string;
   avatar: string
   $id: string;
 };
 
 export interface UserState {
   user: null | User;
   loading: boolean;
   setUser: (user: User) => void;
   delUser: () => void;
   setLoading: (value: boolean) => void;
 }
 