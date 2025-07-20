import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

// type
interface InitialState {
    tasks: ITask[];
    filter:"all" | "high" | "medium" | "low";
}


const initialState :  InitialState ={
    tasks:[
        {
          id:"yashkdddkld",
          title:"Initialize task",
          description:"Create home page and rounting",
          dueDate:"2025-12",
          isCompleted:false,
          priority:"High",  
        },
                {
          id:"yashkdddkld",
          title:"Initialize task",
          description:"Create home page and rounting",
          dueDate:"2025-12",
          isCompleted:false,
          priority:"High",  
        }
    ],
    filter:"all"
}

// 
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        
    }
})


export const selectTasks = (state:RootState)=>{
   return state.todo.tasks;
}

export const selectFilter = (state:RootState)=>{
   return state.todo.filter;
}

export default taskSlice.reducer;