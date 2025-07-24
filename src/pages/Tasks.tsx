import { AddTaskModal } from '@/components/module/tasks/AddTaskModal';
import TaskCard from '@/components/module/tasks/TaskCard';
import { useAppSelector } from '@/hooks/hooks'
import { selectTasks } from '@/redux/features/task/taskSlice';

const Tasks = () => {


//
const tasks = useAppSelector(selectTasks); 

console.log(tasks);



  return (
   <div>
    <div className='flex justify-between items-center gap-4'>
        <h2 className='text-4xl text-center py-4 text-red-500 mb-6'>Tasks</h2>
        <AddTaskModal/>
    </div>
       <div className='space-y-3'>
         {tasks.map(task => <TaskCard key={task.id} {...task}/>)}
    </div>
   </div>
  )
}

export default Tasks