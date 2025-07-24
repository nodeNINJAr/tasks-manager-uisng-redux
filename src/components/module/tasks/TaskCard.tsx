import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox';
import { useAppDispatch } from '@/hooks/hooks';
import { cn } from '@/lib/utils';
import { deleteTask, toggleCompleteState } from '@/redux/features/task/taskSlice';
import { Trash2 } from 'lucide-react'



interface ITask{
    title:string;
    description:string;
    isCompleted:boolean;
    priority:string;

}

// 
const TaskCard = ({title, description, isCompleted, priority, id}:ITask) => {



const disPatch = useAppDispatch();

    // 
  return (
    <div className='border px-5 py-5 rounded-md'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <div className={cn("size-3 rounded-full ",{
                    "bg-green-600":priority === "low",
                     "bg-yellow-600":priority === "medium",
                      "bg-red-600":priority === "high",
                })}></div>
                <h1 className={cn({"line-through": isCompleted})}>{title}</h1>  
            </div>
            {/*  */}
            <div className='flex gap-3 items-center' >
                <Button onClick={()=>disPatch(deleteTask(id))} variant={"link"} className='p-0 text-red-600 cursor-pointer'>
                    <Trash2  />
                </Button>
                <Checkbox checked={isCompleted} onClick={()=>disPatch(toggleCompleteState(id))} />
            </div>
        </div>
        <p className='mt-5'>{description}</p>
    </div>
  )
}

export default TaskCard