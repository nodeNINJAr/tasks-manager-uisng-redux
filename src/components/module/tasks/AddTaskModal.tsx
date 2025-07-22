import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"

export function AddTaskModal() {

const form = useForm();

const onSubmit=(data)=>{
    console.log(data);
}





  // 
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add your task here</DialogTitle>
            <DialogDescription className="sr-only">
                You can add your task by fill the field
            </DialogDescription>
          </DialogHeader>
          {/* <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Task Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div> */}

         <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="Title"
                    render={({field}) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                              <Input {...field} value={field.value || ""}/>
                        </FormControl>
                    </FormItem>
                    )}
                 />
                 {/* form field 2 */}
                <FormField
                    control={form.control}
                    name="desc"
                    render={({field}) => (
                    <FormItem>
                        <FormLabel >Description</FormLabel>
                        <FormControl>
                            <Textarea {...field} value={field.value|| ""} placeholder="Type your message here." />
                        </FormControl>
                    </FormItem>
                    )}
                 />
                 {/*  */}
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
