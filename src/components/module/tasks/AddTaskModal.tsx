import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useAppDispatch } from "@/hooks/hooks"
import { cn } from "@/lib/utils"
import { addTask } from "@/redux/features/task/taskSlice"
import type { ITask } from "@/type"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddTaskModal() {

const form = useForm();

const disPatch = useAppDispatch();

const onSubmit:SubmitHandler<FieldValues>=(data)=>{
    console.log(data);
    disPatch(addTask(data as ITask))
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
    
           {/* form field 1 */}
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
                    name="description"
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
                   <FormField
                    control={form.control}
                    name="priority"
                    render={({field}) => ( 
                         <FormItem>
                          <FormLabel>Select Your task priority </FormLabel>
                          {/*  */}
                          <Select 
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Ex. High, Low, Medium" />
                                </SelectTrigger>
                            </FormControl>
                            {/*  */}
                              <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                              </SelectContent>
                            </Select>
                            {/*  */}
                      </FormItem>
                      
                     )}
                 />
                    {/* due date */}
                      <FormField
                          control={form.control}
                          name="dueDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Due Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date > new Date() || date < new Date("1900-01-01")
                                    }
                                    captionLayout="dropdown"
                                  />
                                </PopoverContent>
                              </Popover>
                        
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
