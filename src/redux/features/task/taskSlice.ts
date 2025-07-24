import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

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
          isCompleted:true,
          priority:"high",  
            userId:"kajdd"
        },
                {
          id:"yashkdddkld1",
          title:"Working with node js",
          description:"Create home page and rounting",
          dueDate:"2025-12",
          isCompleted:false,
          priority:"low",  
          userId:"kajdd"
        },
                 {
          id:"yashkdddkld2",
          title:"Working with redux js",
          description:"Create home page and rounting",
          dueDate:"2025-12",
          isCompleted:false,
          priority:"high",  
          userId:"kajdd"
        },
                 {
          id:"yashkdddkld3",
          title:"Working with next js",
          description:"Create home page and rounting",
          dueDate:"2025-12",
          isCompleted:false,
          priority:"medium",  
          userId:"kajdd"
        }
    ],
    filter:"all"
}

// type for task
type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" >;

// 
const createTask = (taskData:DraftTask):ITask =>{
  return {id:nanoid(), isCompleted:false, ...taskData}
};

// 
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
            addTask:(state, action:PayloadAction<ITask>)=>{   
            const taskData = createTask(action.payload)
            // 
            state.tasks.push(taskData);
        },
        // 
        toggleCompleteState : (state,action:PayloadAction<string>)=>{
          console.log(action.payload);
             state.tasks.forEach((task)=>
                task.id === action.payload 
                ? ( task.isCompleted = !task.isCompleted )
                : task
              )
        },
        deleteTask : (state, action:PayloadAction<string>)=>{
          console.log(action.payload);
          state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        
        // filter option
      updateFilter : (state, action:PayloadAction<"all"| "low" | "medium" | "high">)=>{
           console.log(action.payload);
           state.filter = action.payload;
      }


    },
})


export const selectTasks = (state:RootState)=>{
   //  
   const filter = state.todo.filter;
    //  
   if(filter==="all"){
       return state.todo.tasks;
   }
    return state.todo.tasks.filter(task=> task.priority === filter)
}

export const {addTask, toggleCompleteState, deleteTask, updateFilter} = taskSlice.actions;


export const selectFilter = (state:RootState)=>{
   return state.todo.filter;
}

export default taskSlice.reducer;