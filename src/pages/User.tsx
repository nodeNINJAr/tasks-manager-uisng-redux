import { AddUserModal } from '@/components/module/users/AddUserModal'
import UserCard from '@/components/module/users/userCard'
import { useAppSelector } from '@/hooks/hooks'
import { selectUsers } from '@/redux/features/user/userSlice'


const User = () => {

  const users = useAppSelector(selectUsers)



  // 
  return (
  <>

    <div className='flex justify-between gap-4 items-center'>
        <h1>All User</h1>
        <AddUserModal/>
    </div>
      {users.length > 0 ?

       <div className='mt-10 grid grid-cols-2 gap-2'>
        {/*  */}
        {
          users.map(user => <UserCard key={user.id} {...user}/>)
        }
       </div>
      : <p className='flex justify-center items-center mt-40'>No user Found on this array</p>
      } 
  </>
  )
}

export default User