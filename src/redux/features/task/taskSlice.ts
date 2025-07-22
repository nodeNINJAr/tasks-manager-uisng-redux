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
          id:"yashkdddkld1",
          title:"Working with node js",
          description:"Create home page and rounting",
          dueDate:"2025-12",
          isCompleted:false,
          priority:"Low",  
        },
                 {
          id:"yashkdddkld2",
          title:"Working with redux js",
          description:"Create home page and rounting",
          dueDate:"2025-12",
          isCompleted:false,
          priority:"High",  
        },
                 {
          id:"yashkdddkld3",
          title:"Working with next js",
          description:"Create home page and rounting",
          dueDate:"2025-12",
          isCompleted:false,
          priority:"Medium",  
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