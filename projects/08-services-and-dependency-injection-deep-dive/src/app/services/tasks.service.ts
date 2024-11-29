import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../tasks/task.model';

@Injectable({
   providedIn: 'root',
})
export class TasksService {
   // 🟦
   private tasks = signal<Task[]>([]);

   allTasks = this.tasks.asReadonly();

   // 🟦
   // 🟦🟦
   // 🟦🟦🟦
   addTask(taskData: { title: string; description: string }) {
      const newTask: Task = {
         id: Math.random().toString(),
         ...taskData,
         status: 'OPEN',
      };
      this.tasks.update(oldTasks => [...oldTasks, newTask]);
   }

   // 🟦
   // 🟦🟦
   // 🟦🟦🟦
   updateTaskStatus(taskId: string, newStatus: TaskStatus) {
      this.tasks.update(oldTasks =>
         oldTasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
         )
      );
   }
}
