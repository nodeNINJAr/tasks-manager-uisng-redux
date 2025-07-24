import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/hooks/hooks"
import { addUser } from "@/redux/features/user/userSlice"
import type { IUser } from "@/type"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddUserModal() {

const form = useForm();

const disPatch = useAppDispatch();

const onSubmit:SubmitHandler<FieldValues>=(data)=>{
    console.log(data);
    disPatch(addUser(data as IUser))
}


  // 
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add user</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
         <DialogHeader>
            <DialogTitle>Add your user here</DialogTitle>
          </DialogHeader>
           {/* form field 1 */}
         <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                    <FormItem>
                        <FormLabel>User Name</FormLabel>
                        <FormControl>
                              <Input {...field} value={field.value || ""} placeholder="Write An user Name"/>
                        </FormControl>
                    </FormItem>
                    )}
                 />
              
                <DialogFooter className="mt-3">
                <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
            </DialogFooter>
            </form>
          </Form>
          {/*  */}
         
        </DialogContent>
      </form>
    </Dialog>
  )
}
