import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/hooks/hooks'
import { removeUser} from '@/redux/features/user/userSlice';
import { Trash2 } from 'lucide-react'



interface IUser {
    id:string;
    name:string;
}
// 

const UserCard = ({id, name}:IUser) => {

// 
const disPatch = useAppDispatch()


  return (
    <div className='flex justify-between w-full gap-2.5 border-2 border-green-500 rounded-sm p-6'>
        <h2>{name}</h2>
         <Button onClick={()=>disPatch(removeUser(id))} variant={"link"} className='p-0 text-red-600 cursor-pointer'>
            <Trash2  />
        </Button>
    </div>
  )
}

export default UserCard;