import type { RootState } from "@/redux/store";
import type { IUser } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";



// type
interface InitialState {
    users:IUser[]
}

// initalstate
const initialState : InitialState = {
    users:[]
}

// type for task
type DraftUser = Pick<IUser, "name">;
// 
const createUser = (userData:DraftUser): IUser =>{
  return {id:nanoid(), ...userData}
};
// 
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
       addUser : (state, action:PayloadAction<IUser>)=>{
          const userData = createUser(action.payload);
          //    
          if(userData.name === undefined || userData.name === '' ){
             return alert("Please Write Name")  
          } 
          state.users.push(userData)
       },
       removeUser : (state, action: PayloadAction<string>)=>{
          console.log(action.payload);
          state.users = state.users.filter((user) => user.id !== action.payload)
       }
    }
})

export const selectUsers = (state:RootState)=> state.user.users;

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;