export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high"| "medium" | "low";
  userId:string | null;
}

export interface IUser {
  id: string;
  name: string
}