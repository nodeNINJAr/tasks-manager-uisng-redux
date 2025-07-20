import { useAppSelector } from '@/hooks/hooks'
import { selectTasks } from '@/redux/features/task/taskSlice';

const Tasks = () => {


//
const tasks = useAppSelector(selectTasks); 

console.log(tasks);









  return (
    <div>Tasks</div>
  )
}

export default Tasks