import { AddTaskModal } from '@/components/module/tasks/AddTaskModal';
import TaskCard from '@/components/module/tasks/TaskCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { useGetTasksQuery } from '@/redux/api/baseApi';
import { selectTasks, updateFilter } from '@/redux/features/task/taskSlice';

const Tasks = () => {


//
// const tasks = useAppSelector(selectTasks); 

// console.log(tasks);
const disPatch = useAppDispatch();
// from api
const {isError,isLoading,data} = useGetTasksQuery(undefined,{
  // for refetch
   pollingInterval:20000,//20 sec loop
   refetchOnMountOrArgChange:true, //refetch on route chnages
   refetchOnFocus:true,
   refetchOnReconnect:true, // when internet is reconnected
})


console.log(data, isLoading, isError);


  if(isLoading) return "Loading..."

  return (
   <div>
    <div className='flex justify-between items-center gap-4'>
        <h2 className='text-4xl text-center py-4 text-red-500 mb-6'>Tasks</h2>
       <div className='flex justify-end items-center gap-5'>
         <Tabs defaultValue="all">
           <TabsList className='space-x-2'>
              <TabsTrigger onClick={()=>disPatch(updateFilter("all"))} value="all">All</TabsTrigger>
              <TabsTrigger onClick={()=>disPatch(updateFilter("low"))} value="low">Low</TabsTrigger>
              <TabsTrigger onClick={()=>disPatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
              <TabsTrigger onClick={()=>disPatch(updateFilter("high"))} value="high">High</TabsTrigger>
           </TabsList>
           {/*  */}
        </Tabs> 
          {/* modal */}
        <AddTaskModal/>
       </div>
    </div>
       <div className='space-y-3'>
         {data.tasks.map(task => <TaskCard key={task.id} {...task}/>)}
    </div>
   </div>
  )
}

export default Tasks