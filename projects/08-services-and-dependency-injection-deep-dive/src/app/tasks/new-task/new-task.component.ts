import { Component, ElementRef, viewChild } from '@angular/core'

@Component({
   selector: 'app-new-task',
   templateUrl: './new-task.component.html',
   styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
   private formEl = viewChild<ElementRef<HTMLFormElement>>('form')

   onAddTask(title: string, description: string) {
      this.formEl()?.nativeElement.reset()
   }
}
