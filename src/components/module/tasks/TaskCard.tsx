import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Trash2 } from 'lucide-react'



interface ITask{
    title:string;
    description:string;
    isCompleted:boolean;
    priority:string;

}

// 
const TaskCard = ({title, description, isCompleted, priority}:ITask) => {
  return (
    <div className='border px-5 py-5 rounded-md'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <div className={cn("size-3 rounded-full ",{
                    "bg-green-600":priority === "Low",
                     "bg-yellow-600":priority === "Medium",
                      "bg-red-600":priority === "High",
                })}></div>
                <h1>{title}</h1>  
            </div>
            {/*  */}
            <div className='flex gap-3 items-center' >
                <Button variant={"link"} className='p-0 text-red-600'>
                    <Trash2/>
                </Button>
                <Checkbox />
            </div>
        </div>
        <p className='mt-5'>{description}</p>
    </div>
  )
}

export default TaskCard